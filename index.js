const Discord = require('discord.js');
const config = require('./config.json');


const client = new Discord.Client();

client.once('ready', () => {
    console.log('bot ONLINE!');
});



client.login(config.TOKEN);