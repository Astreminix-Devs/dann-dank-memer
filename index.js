const Discord = require("discord.js");

const client = new Discord.Client();

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

client.on('ready', async () => {

var server = client.guilds.get("716227489860681738");
var channel = server.channels.get("716227489860681743")

console.log(`Logged in as ${client.user.username}, ready to get this bread.`);
for (var i = 0; i < 1000000; i++) {
channel.send('pls search')
await sleep(1000)
channel.send('dresser');
await sleep(7000)
channel.send('pls beg')
await sleep(25100)
channel.send('pls search');
await sleep(1000)
channel.send('dresser');
await sleep(5000)
channel.send('pls pm')
await sleep(1000)
channel.send('d');
await sleep(13500)
channel.send('pls beg')
await sleep(31000)
channel.send('pls use candy')
await sleep(6500)
}


    });


client.login(process.env.token)
