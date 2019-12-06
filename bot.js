const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NjUyMjU0MDM5MTg2MDc5ODA1.Xelxvg.JhpOiO0q6-Aq55bDKZFMuu2Xics);//where BOT_TOKEN is the token of our bot
