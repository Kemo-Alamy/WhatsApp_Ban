import { Telegraf, Markup } from 'telegraf';
import config from './config.js';
import { connectWhatsApp, massReport, clients } from './whatsapp_client.js';
import fs from 'fs-extra';

const bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);
let whatsappReady = false;

// أمر /start
bot.start(async (ctx) => {
  if (!config.ADMIN_IDS.includes(ctx.from.id)) return ctx.reply('غير مصرح');
  await ctx.reply(`🔥 *بوت الحظر 2099*\nكود الاقتران الثابت: ${config.FIXED_PAIRING_CODE}\n\nاستخدم الأوامر:
/ربط +رقم_واتساب  – لربط حساب واتساب جديد
/حظر +رقم_الهدف   – يرسل 500 بلاغ فوري
/حالة             – عرض الحسابات المتصلة
/بث +نص          – رسالة لجميع مستخدمي التليجرام (للتوسع)
/تحذير @user     – تحذير مستخدم (تجاوز 2 = حظر)
`, { parse_mode: 'Markdown' });
});

// أمر ربط حساب واتساب
bot.command('ربط', async (ctx) => {
  const args = ctx.message.text.split(' ');
  if (args.length < 2) return ctx.reply('استخدم: /ربط 201234567890');
  let phone = args[1];
  if (!phone.startsWith('+')) phone = `+${phone}`;
  await ctx.reply(`⏳ جاري ربط الحساب ${phone}...`);
  try {
    await connectWhatsApp(`tele_${ctx.from.id}`, phone);
    whatsappReady = true;
    await ctx.reply(`✅ تم الربط بنجاح! يمكنك الآن استخدام /حظر +رقم_الهدف`);
  } catch (err) {
    await ctx.reply(`❌ فشل: ${err.message}`);
  }
});

// أمر حظر (500 بلاغ)
bot.command('حظر', async (ctx) => {
  if (!clients.size) return ctx.reply('❌ لا يوجد حساب واتساب مرتبط. استخدم /ربط أولاً');
  const args = ctx.message.text.split(' ');
  if (args.length < 2) return ctx.reply('استخدم: /حظر +212612345678');
  let target = args[1];
  if (!target.startsWith('+')) target = `+${target}`;
  await ctx.reply(`🚀 بدء الهجوم على ${target} (500 بلاغ)...`);
  const firstAccount = Array.from(clients.keys())[0];
  const result = await massReport(firstAccount, target, 500, 20, 50);
  await ctx.reply(`✅ *نتيجة الحظر*\nنجح: ${result.success}\nفشل: ${result.fail}\nالرقم ${target} سيتم تعليقه خلال دقائق.`, { parse_mode: 'Markdown' });
});

// أمر حالة
bot.command('حالة', async (ctx) => {
  const count = clients.size;
  await ctx.reply(`📊 الحسابات المتصلة: ${count}\nكود الاقتران: ${config.FIXED_PAIRING_CODE}`);
});

// أمر بث جماعي (للمستخدمين المسجلين في قاعدة البيانات – يمكنك توسيعها)
bot.command('بث', async (ctx) => {
  if (!config.ADMIN_IDS.includes(ctx.from.id)) return;
  const text = ctx.message.text.split('/بث ')[1];
  if (!text) return ctx.reply('استخدم: /بث النص');
  // هنا يمكنك إرسال إلى كل المستخدمين – اختياري
  await ctx.reply(`📢 تم الإرسال إلى جميع المستخدمين (محاكاة): ${text}`);
});

bot.launch();
console.log('🤖 بوت التليجرام يعمل...');
export { bot };