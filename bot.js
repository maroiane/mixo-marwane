const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
     client.user.setActivity("*help watchin a porno movi XD",{type: 'WATCHING'});
 client.user.setStatus("dnd")



  console.log('-1--2--3---4--');
  console.log('-Bot Is Online-')
  console.log('-1--2---3---4--')
  console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
   console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log(`--hello mother fukker--`);
});


client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='*member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('??| Members info')
      .addBlankField(true)
      .addField('??| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('??| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('??| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`
      .addField('??| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('?| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });

  
  client.on('message', message => {
  if (message.content.startsWith("*avatar")) {

      var mentionned = message.mentions.users.first();
  var king66s;
    if(mentionned){
        var king66s = mentionned;
    } else {
        var king66s = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${king66s.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});

 client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('*ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
client.on("message", msg => {
  if(msg.content === '*' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)

          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});
client.on("message", (message) => {
if (message.content.startsWith("*ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage(':white_check_mark: ')

}
});


client.on("message", (message) => {
if (message.content.startsWith("*cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage(':white_check_mark: ')
    
}
});
client.on("message", (message) => {
    if (message.content.startsWith('*delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
var prefix = "*";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// ^^say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});
client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  you dont have a Permission**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``:white_check_mark:  ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });
  client.on('message', message => {

if (message.content.startsWith("*add.r")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color : "RANDOM", 
                permissions : [1]
            }).then(function(role){
                message.addRole(role)
            })

}
});






 
 
 
 client.on("message", message => {
 if (message.content === "*help") {
        message.react("😳")
                message.react("👻")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  **prefix = "*"**
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

***
=>[_______________________________]=>
             Admin Commands
=>_________________________________]=>

 => *kick <mention > => kick member from server
 
 => *ban <mention > => ban member from server

 => *clear => clear chat 
 
 => *mute < mention > => mute member 

 => *unmute <mention> => unmute member 

 => *ct <name> => create channel

 => *cv <name> create voice channel
  
 => *bc <message> => message all members in server
  
 => *add.r => to add role

=>[_________________________________]=>
            General  Commands
=>[________________________________]


=> *member => members info

=> *ser-av => server avatar

=> *id => your id

=> *avatar => your avatar account

=> *help => help by english

=> *ping => to see ping

=> *bot => bot informations 

=> *server => server informations 

=> *embed <message> => 

=> *say  <message> => 

 
==================================================================


***

`)


message.author.sendEmbed(embed)

}
}); 


client.on('message', message => {
    if (message.content.startsWith("*info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Sniper-Bot`` ')
            
            .addField('``Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``Prefix``' , `[ * ]` , true)
                  .addField('``Language``' , `[ Java Script ]` , true)
                  .addField('``Founder ``' , ` [ ! ΜคŘ#2392] ` , true)
    })
}
});


client.on("message", (message) => {
    if (message.content.startsWith("*kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('=> :warning: you dont have a Permission sory');
          if (message.mentions.users.size < 1) return message.reply("**ߠChoose a person**");
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " bye :wave: ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("*ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning: you dont have a Permission sory');
        var member= message.mentions.members.first();
         if (message.mentions.users.size < 1) return message.reply("**ߠChoose a person**");
        member.ban().then((member) => {
            message.channel.send(member.displayName + " bye :wave: ");
        }).catch(() => {
            message.channel.send(":Error -_-");
        });
    }
});
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "*mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** no Permission 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** no mute role :/ 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**  Choose a person ?**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('use:', '')
    .addField('done:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('by:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** no Permission Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. done**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. done**").catch(console.error);
});
  }

};

});



   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "*unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**  no Permission 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** no mute role :/ 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**Choose a person ? **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('use:', 'mute/unmute')
    .addField('done:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('by:', `${message.author.username}#${message.author.discriminator}`)
message.channel.send({embed: embed}); 
if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. done **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. done **").catch(console.error);
});
  }

};

});
client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "*ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`in ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });
  
 

client.on('message', message => {
var prefix = "*";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("***bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» server :', `${message.guild.name}`)
            .addField('» Sender : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » message : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.login(process.env.BOT_TOKEN); 
