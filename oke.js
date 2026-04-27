const { makeWASocket, useMultiFileAuthState, DisconnectReason, Browsers } = require("@adiwajshing/baileys");
const { Boom } = require('@hapi/boom');
const pino = require('pino');

module.exports = async (opts = {}) => {
  const { state, saveCreds } = await useMultiFileAuthState('./session');
  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
    browser: Browsers.ubuntu('Chrome'),
    printQRInTerminal: false, // إلغاء QR
    ...opts
  });
  sock.ev.on('creds.update', saveCreds);
  return sock;
};