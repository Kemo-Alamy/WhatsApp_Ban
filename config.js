export default {
  // ===== إعدادات تليجرام =====
  TELEGRAM_BOT_TOKEN: "YOUR_BOT_TOKEN_HERE",   // ضع التوكن الذي من @BotFather
  ADMIN_IDS: [123456789],                      // ضع معرف التليجرام الخاص بك (أدمن)
  REQUIRED_CHANNEL: null,                     // ضع معرف القناة إن أردت اشتراكًا إجباريًا (مثل "@channel")

  // ===== إعدادات واتساب =====
  FIXED_PAIRING_CODE: "KEMO KING",             // الكود الثابت للربط (يعمل في سيناريو 2099)
  AUTHORIZED_NUMBERS: ["+201234567890"],       // أرقام واتساب المسموح لها بإرسال أوامر (ضع رقمك)

  // ===== إعدادات الهجوم =====
  REPORTS_PER_ACCOUNT: 500,                    // 500 بلاغ لكل حساب واتساب مرتبط
  PARALLEL_BATCH_SIZE: 20,                    // 20 بلاغًا متوازيًا
  DELAY_BETWEEN_BATCH_MS: 50,                 // 0.05 ثانية بين الدفعات

  // ===== مسارات =====
  SESSIONS_DIR: "./sessions/"
};