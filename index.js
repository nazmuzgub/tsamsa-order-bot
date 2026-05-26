(async () => {

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const url =
`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

try {

const response = await fetch(url, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
chat_id: CHAT_ID,
text: '✅ TSAMSA BOT ONLINE'
})
});

const data = await response.text();

console.log(data);

} catch (e) {

console.log(e);

}

})();
