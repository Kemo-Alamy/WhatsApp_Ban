export default {
  // ===== إعدادات تليجرام =====
  TELEGRAM_BOT_TOKEN: "8112888424:AAF3j-EoZT3HVNr-t8aBslMHF2h7OypbfDM",   // ضع التوكن الذي من @BotFather
  ADMIN_IDS: [6520549428],                      // ضع معرف التليجرام الخاص بك (أدمن)
  REQUIRED_CHANNEL: "@Crashkemobot" ,                     // ضع معرف القناة إن أردت اشتراكًا إجباريًا (مثل "@channel")

  // ===== إعدادات واتساب =====
  FIXED_PAIRING_CODE: "KEMO KING",             // الكود الثابت للربط (يعمل في سيناريو 2099)
  AUTHORIZED_NUMBERS: ["+201115168017"],       // أرقام واتساب المسموح لها بإرسال أوامر (ضع رقمك)

  // ===== إعدادات الهجوم =====
  REPORTS_PER_ACCOUNT: 500,                    // 500 بلاغ لكل حساب واتساب مرتبط
  PARALLEL_BATCH_SIZE: 20,                    // 20 بلاغًا متوازيًا
  DELAY_BETWEEN_BATCH_MS: 50,                 // 0.05 ثانية بين الدفعات

  // ===== مسارات =====
  SESSIONS_DIR: "./sessions/"
};
