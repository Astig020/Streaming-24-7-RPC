const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: true,
  checkUpdate: true
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  const r = new Discord.RichPresence()
    .setApplicationId('1100962688688988180')
    .setType('STREAMING') //STREAMING, PLAYING, LISTENING.
    .setURL('https://www.youtube.com/@PraiseGodNation') // or your yt url
    .setState('Country: Philippines')
    .setName('Netflix')
    .setDetails('Netflix & Chill')
    .setStartTimestamp(Date.now()) // remove this if you dont want the timestamp (the time it started the rpc)
    /*.setParty({         
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/

    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1002198359932665927/1114509990934360105/watching-tv.gif?width=495&height=495') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Netflix & Chill') //Text when you hover the Large image
    .addButton('My DiscordServer', 'https://discord.gg/eSpAbkr23y')
    .addButton('My FBACCOUNT', 'https://bit.ly/OFFICIALACCOUNT')
  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline
})

client.login(process.env.TOKEN)






















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/
