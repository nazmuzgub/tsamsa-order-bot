const TelegramBot = require(‘node-telegram-bot-api’);

const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(token, {
polling: false
});

async function startBot() {

try {
    console.log('TSAMSA BOT STARTING...');
    await bot.sendMessage(
        chatId,
        '✅ TSAMSA BOT ONLINE'
    );
    console.log('MESSAGE SENT');
} catch (error) {
    console.log(error);
}

}

startBot();
