const Discord = require ('discord.js');
const bot = new Discord.Client();

// Lorsque le Bot est "ready"
bot.on('ready', () => {
    bot.user.setActivity("Faite *help pour les commands du bot");
    console.log("Je suis en Ligne!");
})

bot.on('message', message =>{ // Lorsque quelqu'un marque un message
    if(message.content == "*twitch"){ // Si le message est égal à "!crunch" alors
        message.reply("Salut Voici le Twitch du Discord EN DEV"); // Le bot répond à l'utilisateur "crunch crunch BN"
    }
})    

bot.on('message', message =>{ // Lorsque quelqu'un marque un message
    if(message.content == "*Youtube"){ // Si le message est égal à "!crunch" alors
        message.reply("Salut Voici le Youtube De la Ligue des Enfers https://www.youtube.com/channel/UC79vSmVFF9770QmTiIC6qLw"); // Le bot répond à l'utilisateur "crunch crunch BN"
    }
})  

bot.on('message', message =>{ // Lorsque quelqu'un marque un message
    if(message.content == "*instagram"){ // Si le message est égal à "!crunch" alors
        message.reply("Salut Voici l'instagram du Discord EN DEV"); // Le bot répond à l'utilisateur "crunch crunch BN"
    }
})

bot.on('message', message =>{ // Lorsque quelqu'un marque un message
    if(message.content == "*help"){ // Si le message est égal à "!crunch" alors
        message.reply("Voici les Commands du bot *Youtube *instagram *twitch"); // Le bot répond à l'utilisateur "crunch crunch BN"
    }
})

// Conneciton du bot
bot.login("NzI2ODk5NjY4NDA3MTU2NzQ3.XvkVHQ.LJTiG9srniSI4YtQJwHf7LC0Gc8")