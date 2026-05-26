const TelegramBot = require('node-telegram-bot-api');
const puppeteer = require('puppeteer');

const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(token);

let lastOrder = '';

async function checkOrders() {

const browser = await puppeteer.launch({
headless: true,
args: ['--no-sandbox']
});

const page = await browser.newPage();

await page.goto(
'https://manage.edokan.co/orders',
{
waitUntil: 'networkidle2'
}
);

const content =
await page.content();

const match =
content.match(/13\d+/);

if(match){

const invoice = match[0];

if(invoice !== lastOrder){

lastOrder = invoice;

bot.sendMessage(
chatId,
`🛒 New Order\n\n📄 ${invoice}`
);

}

}

await browser.close();

}

setInterval(checkOrders, 60000);

console.log('BOT RUNNING');
