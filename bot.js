const TelegramBot = require('node-telegram-bot-api');
const token = '7315340926:AAHUHlC1I1oLtEstM_vJ5K8sLPs07mqFp9M';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const webAppUrl = 'https://transak-mini-apps.vercel.app/';

    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Open Transak', web_app: { url: webAppUrl } }]
            ]
        }
    };

    bot.sendMessage(chatId, 'Welcome! Click the button below to open Transak.', opts);
});
