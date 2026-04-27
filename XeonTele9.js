// XeonTele9.js - أوامر موحدة للتليجرام والواتساب
const fs = require('fs');
const { simple } = require("./lib/myfunc");

module.exports = async (botOrSocket, ctxOrMsg, fromWhatsApp = false) => {
  try {
    let text, fromId, replyFunc, isGroup;
    if (fromWhatsApp) {
      // الوضع: واتساب
      const m = ctxOrMsg;
      text = m.body || '';
      fromId = m.sender;
      replyFunc = (msg) => m.reply(msg);
      isGroup = m.isGroup;
    } else {
      // التليجرام
      const ctx = ctxOrMsg;
      text = ctx.message?.text || '';
      fromId = ctx.from?.id?.toString();
      replyFunc = (msg) => ctx.reply(msg);
      isGroup = ctx.chat?.type !== 'private';
    }

    // الأوامر العامة
    if (text === '/menu' || text === '.menu') {
      let menu = `🌹 *قائمة الأوامر* 🌹\n\n` +
        `/start - بدء البوت\n` +
        `/checkid - معرفة معرفك\n` +
        `/listprem - قائمة بريميم (للموزع)\n` +
        `/addprem <id> - إضافة بريميم (للموزع)\n` +
        `/delprem <id> - حذف بريميم (للموزع)\n` +
        `/addresell <id> - إضافة موزع (للمطور)\n` +
        `/broadcast <رسالة> - بث (للمطور)\n` +
        `/reqpair <رقم> - ربط واتساب (للمطور)\n` +
        `\n🚀 البوت يعمل بنجاح!`;
      return replyFunc(menu);
    }

    // أوامر التليجرام فقط (لأننا نستخدمها في التليجرام فقط)
    if (!fromWhatsApp) {
      const ctx = ctxOrMsg;
      const userId = ctx.from.id.toString();
      // التحقق من العضوية الإجبارية (يمكن تفعيلها لاحقاً)
      // ... 
      // أوامر المطورين والموزعين
      const isDeveloper = global.DEVELOPER.includes(userId);
      const isReseller = JSON.parse(fs.readFileSync('./lib/reseller.json', 'utf8')).includes(userId);
      // أوامر ...
    }
  } catch (err) {
    console.error("XeonTele9 error:", err);
  }
};