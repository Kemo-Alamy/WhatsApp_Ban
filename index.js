require("./settings");
const { Telegraf } = require('telegraf');
const { simple } = require("./lib/myfunc");
const fs = require('fs');
const chalk = require("chalk");
const axios = require('axios');
const { Boom } = require('@hapi/boom');
const simple2 = require('./lib2/oke');
const { sleep } = require('./lib2/myfunc');

// ==================== إعدادات التليجرام ====================
const bot = new Telegraf(global.BOT_TOKEN);
const usersFile = './users.json';
const premiumFile = './lib/premium.json';
const resellerFile = './lib/reseller.json';
const sessionsDir = './sessions'; // مجلد لكل جلسة واتساب (رقم)

if (!fs.existsSync(usersFile)) fs.writeFileSync(usersFile, '[]');
if (!fs.existsSync(premiumFile)) fs.writeFileSync(premiumFile, '[]');
if (!fs.existsSync(resellerFile)) fs.writeFileSync(resellerFile, '[]');
if (!fs.existsSync(sessionsDir)) fs.mkdirSync(sessionsDir, { recursive: true });
if (!fs.existsSync('./sticker')) fs.mkdirSync('./sticker', { recursive: true });

let allUsers = JSON.parse(fs.readFileSync(usersFile));
let premiumUsers = JSON.parse(fs.readFileSync(premiumFile));
let resellerUsers = JSON.parse(fs.readFileSync(resellerFile));

// حفظ بيانات المستخدمين
async function saveUser(userId) {
  if (!allUsers.includes(userId)) {
    allUsers.push(userId);
    fs.writeFileSync(usersFile, JSON.stringify(allUsers, null, 2));
  }
}

// ==================== دوال إدارة جلسات الواتساب ====================
const activeSessions = new Map(); // خريطة لتخزين كائنات socket لكل رقم

// بدء جلسة واتساب جديدة عبر Pairing Code
async function startWhatsAppSession(phoneNumber, ctx, replyToUser = true) {
  const sanitizedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const sessionPath = `${sessionsDir}/session_${sanitizedNumber}`;
  if (!fs.existsSync(sessionPath)) fs.mkdirSync(sessionPath, { recursive: true });
  
  // استيراد الوظائف من Baileys ديناميكياً
  const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require("@adiwajshing/baileys");
  const pino = require('pino');
  
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false,
    browser: ['Chrome (Linux)', '', '']
  });
  
  sock.ev.on('creds.update', saveCreds);
  
  // طلب كود الاقتران
  if (replyToUser && ctx) {
    await ctx.reply(`📱 جاري طلب كود الاقتران للرقم +${sanitizedNumber}...`);
  }
  const code = await sock.requestPairingCode(sanitizedNumber);
  if (replyToUser && ctx) {
    await ctx.reply(`🔐 كود الاقتران الخاص بك: *${code}*\nأدخله في الواتساب > الأجهزة المرتبطة > ربط جهاز`);
  }
  
  // معالجة أحداث الاتصال
  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'open') {
      console.log(chalk.green(`✅ تم ربط واتساب للرقم +${sanitizedNumber}`));
      activeSessions.set(sanitizedNumber, sock);
      if (replyToUser && ctx) {
        await ctx.reply(`✅ تم ربط واتساب بنجاح!\nيمكنك الآن استخدام البوت على واتساب عبر إرسال .menu`);
      }
      // إرسال ترحيب وقائمة أوامر على واتساب
      const welcomeMsg = `🎉 *تم ربط البوت بنجاح!*\n\nأرسل .menu لعرض قائمة الأوامر.\nأرسل .ping للتجربة.`;
      await sock.sendMessage(`${sanitizedNumber}@s.whatsapp.net`, { text: welcomeMsg });
    } else if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) {
        console.log(`تم تسجيل الخروج للرقم +${sanitizedNumber}`);
        activeSessions.delete(sanitizedNumber);
      } else {
        // محاولة إعادة الاتصال
        setTimeout(() => startWhatsAppSession(sanitizedNumber, null, false), 5000);
      }
    }
  });
  
  // معالجة الرسائل الواردة من هذا الرقم
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;
    const type = Object.keys(m.message)[0];
    let text = '';
    if (type === 'conversation') text = m.message.conversation;
    else if (type === 'extendedTextMessage') text = m.message.extendedTextMessage.text;
    else return;
    
    const sender = m.key.remoteJid;
    if (sender.endsWith('@g.us') || sender === 'status@broadcast') return;
    
    // معالجة الأوامر (مثل .menu, .ping, إلخ)
    const lowerText = text.toLowerCase();
    if (lowerText === '.menu') {
      const menu = `🌹 *قائمة أوامر واتساب* 🌹\n\n.menu - عرض القائمة\n.ping - اختبار سرعة البوت\n.info - معلومات البوت\n.owner - المطور\n\n📌 يتم إضافة المزيد قريباً.`;
      await sock.sendMessage(sender, { text: menu });
    } else if (lowerText === '.ping') {
      await sock.sendMessage(sender, { text: 'Pong! 🏓' });
    } else if (lowerText === '.info') {
      await sock.sendMessage(sender, { text: `🤖 بوت متعدد المنصات\n📅 تاريخ التشغيل: ${new Date().toLocaleString()}` });
    } else if (lowerText === '.owner') {
      await sock.sendMessage(sender, { text: `👑 المطور: @${global.OWNER[0]}\nللتواصل عبر التليجرام.` });
    }
  });
  
  return sock;
}

// ==================== أوامر التليجرام ====================
bot.command('start', async (ctx) => {
  if (ctx.chat.type !== 'private') return;
  const user = simple.getUserName(ctx.from);
  await ctx.replyWithMarkdown(`مرحباً *${user.full_name}* في بوت Xeon!\nاستخدم /help لعرض الأوامر.`);
  await saveUser(ctx.from.id);
});

bot.command('help', (ctx) => {
  ctx.reply(`📌 *الأوامر المتاحة:*\n
/start - بدء البوت
/checkid - معرفة معرفك
/listprem - قائمة بريميم (للموزع)
/addprem <id> - إضافة بريميم (للموزع)
/delprem <id> - حذف بريميم (للموزع)
/addresell <id> - إضافة موزع (للمطور)
/delresell <id> - حذف موزع (للمطور)
/broadcast <رسالة> - بث للجميع (للمطور)
/reqpair <رقم> - ربط واتساب (للمطور)
 
*للتواصل:* @${global.OWNER[0]}`, { parse_mode: 'Markdown' });
});

bot.command('checkid', (ctx) => {
  ctx.reply(`معرفك: \`${ctx.from.id}\``, { parse_mode: 'Markdown' });
});

// أوامر الموزعين والمطورين
bot.command('listprem', (ctx) => {
  const userId = ctx.from.id.toString();
  if (!resellerUsers.includes(userId) && !global.DEVELOPER.includes(userId))
    return ctx.reply('🚫 هذا الأمر للموزعين فقط.');
  const list = premiumUsers.length ? premiumUsers.join('\n') : 'لا يوجد';
  ctx.reply(`🌟 قائمة المميزين:\n${list}`);
});

bot.command('addprem', (ctx) => {
  const userId = ctx.from.id.toString();
  if (!resellerUsers.includes(userId) && !global.DEVELOPER.includes(userId))
    return ctx.reply('🚫 غير مصرح.');
  const id = ctx.message.text.split(' ')[1];
  if (!id) return ctx.reply('الاستخدام: /addprem <user_id>');
  if (premiumUsers.includes(id)) return ctx.reply('موجود بالفعل');
  premiumUsers.push(id);
  fs.writeFileSync(premiumFile, JSON.stringify(premiumUsers, null, 2));
  ctx.reply(`✅ تمت إضافة ${id} إلى المميزين.`);
});

bot.command('delprem', (ctx) => {
  const userId = ctx.from.id.toString();
  if (!resellerUsers.includes(userId) && !global.DEVELOPER.includes(userId))
    return ctx.reply('🚫 غير مصرح.');
  const id = ctx.message.text.split(' ')[1];
  if (!id) return ctx.reply('الاستخدام: /delprem <user_id>');
  if (!premiumUsers.includes(id)) return ctx.reply('غير موجود');
  premiumUsers = premiumUsers.filter(u => u !== id);
  fs.writeFileSync(premiumFile, JSON.stringify(premiumUsers, null, 2));
  ctx.reply(`✅ تم حذف ${id} من المميزين.`);
});

bot.command('addresell', (ctx) => {
  if (!global.DEVELOPER.includes(ctx.from.id.toString())) return ctx.reply('🚫 خاص بالمطور');
  const id = ctx.message.text.split(' ')[1];
  if (!id) return ctx.reply('الاستخدام: /addresell <user_id>');
  if (resellerUsers.includes(id)) return ctx.reply('موجود بالفعل');
  resellerUsers.push(id);
  fs.writeFileSync(resellerFile, JSON.stringify(resellerUsers, null, 2));
  ctx.reply(`✅ تمت إضافة موزع ${id}`);
});

bot.command('delresell', (ctx) => {
  if (!global.DEVELOPER.includes(ctx.from.id.toString())) return ctx.reply('🚫 خاص بالمطور');
  const id = ctx.message.text.split(' ')[1];
  if (!id) return ctx.reply('الاستخدام: /delresell <user_id>');
  if (!resellerUsers.includes(id)) return ctx.reply('غير موجود');
  resellerUsers = resellerUsers.filter(u => u !== id);
  fs.writeFileSync(resellerFile, JSON.stringify(resellerUsers, null, 2));
  ctx.reply(`✅ تم حذف الموزع ${id}`);
});

bot.command('broadcast', async (ctx) => {
  if (!global.DEVELOPER.includes(ctx.from.id.toString())) return ctx.reply('🚫 خاص بالمطور');
  const msg = ctx.message.text.split(' ').slice(1).join(' ');
  if (!msg) return ctx.reply('الاستخدام: /broadcast <الرسالة>');
  let success = 0, fail = 0;
  for (const uid of allUsers) {
    try {
      await ctx.telegram.sendMessage(uid, msg, { parse_mode: 'Markdown' });
      success++;
    } catch { fail++; }
  }
  ctx.reply(`تم البث ✅\nنجح: ${success} | فشل: ${fail}`);
});

// أمر ربط الواتساب (يستخدم Pairing Code)
bot.command('reqpair', async (ctx) => {
  if (!global.DEVELOPER.includes(ctx.from.id.toString())) return ctx.reply('🚫 فقط المطور يمكنه ربط أجهزة واتساب.');
  const args = ctx.message.text.split(' ');
  if (args.length < 2) return ctx.reply('الاستخدام: /reqpair <رقم الهاتف>\nمثال: /reqpair 201234567890');
  let phone = args[1].replace(/[^0-9]/g, '');
  if (phone.startsWith('0')) phone = phone.substring(1);
  if (!phone.startsWith('20')) phone = '20' + phone; // ضع كود بلدك أو اتركه للمستخدم
  try {
    await startWhatsAppSession(phone, ctx, true);
  } catch (err) {
    console.error(err);
    ctx.reply('❌ حدث خطأ أثناء محاولة الربط، تأكد من الرقم وحاول مجدداً.');
  }
});

// أمر عام للمستخدمين العاديين لربط واتساب بأنفسهم (اختياري)
bot.command('pair', async (ctx) => {
  const args = ctx.message.text.split(' ');
  if (args.length < 2) return ctx.reply('الاستخدام: /pair <رقم الهاتف>');
  let phone = args[1].replace(/[^0-9]/g, '');
  if (phone.startsWith('0')) phone = phone.substring(1);
  if (!phone.startsWith('20')) phone = '20' + phone;
  try {
    await startWhatsAppSession(phone, ctx, true);
  } catch (err) {
    ctx.reply('❌ فشل الربط، حاول مرة أخرى.');
  }
});

// ==================== تشغيل التليجرام أولاً ====================
bot.launch().then(() => {
  console.log(chalk.green('✅ بوت التليجرام يعمل بنجاح'));
  console.log(chalk.blue(`🔗 @${bot.botInfo.username}`));
});
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));