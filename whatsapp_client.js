import makeWASocket, { useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys';
import fs from 'fs-extra';
import path from 'path';
import config from './config.js';

export const clients = new Map();

export async function connectWhatsApp(accountId, phoneNumber) {
  const sessionPath = path.join(config.SESSIONS_DIR, accountId);
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    browser: ['Ultimate Bot (2099)', 'Chrome', '130.0.0'],
    syncFullHistory: false
  });

  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'connecting') {
      console.log(`🔐 [${accountId}] كود الاقتران الثابت: ${config.FIXED_PAIRING_CODE}`);
      await sock.requestPairingCode(phoneNumber.replace(/[^0-9]/g, ''));
    }
    if (connection === 'open') {
      console.log(`✅ [${accountId}] متصل`);
      clients.set(accountId, sock);
    }
    if (connection === 'close' && lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
      connectWhatsApp(accountId, phoneNumber);
    }
  });
  return sock;
}

export async function massReport(accountId, targetNumber, reports = 500, batchSize = 20, delayMs = 50) {
  const sock = clients.get(accountId);
  if (!sock) throw new Error('الحساب غير متصل');
  const jid = targetNumber.includes('@') ? targetNumber : `${targetNumber}@s.whatsapp.net`;
  let success = 0, fail = 0;
  for (let i = 0; i < reports; i += batchSize) {
    const batch = [];
    const limit = Math.min(batchSize, reports - i);
    for (let j = 0; j < limit; j++) {
      const p = sock.sendMessage(jid, { text: `REPORT_500_${Date.now()}_${i+j}` })
        .then(() => success++).catch(() => fail++);
      batch.push(p);
    }
    await Promise.all(batch);
    if (delayMs > 0) await new Promise(r => setTimeout(r, delayMs));
  }
  return { success, fail };
}