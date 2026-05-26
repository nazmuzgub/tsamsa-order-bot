const https = require('https');

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const message =
encodeURIComponent('✅ TSAMSA BOT ONLINE');

const url =
`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`;

https.get(url, (res) => {

console.log('STATUS:', res.statusCode);

}).on('error', (err) => {

console.log(err);

});

console.log('BOT STARTED');
