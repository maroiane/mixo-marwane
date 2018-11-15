const Discord = require('discord.js');
const client = new Discord.Client();
var active = false
  var AsciiTable = require('ascii-data-table').default


client.on('ready', () => {


console.log('bot is ready');
client.user.setGame(`By Mixo  |*help|*invite`,"http://twitch.tv/S-F")






  console.log('-1--2--3---4--');
  console.log('-Bot Is Online-')
  console.log('-1--2---3---4--')
  console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
   console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log(`--بسم الله و الله اكبر--`);
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
      .addField('??| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
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
     if(!message.member.hasPermission('Adminstrateur ')) return message.reply('**?  you dont have a Permission**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``Mixo bot clear chanel :wastebasket: ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });
  client.on('message', message => {

if (message.content.startsWith("*add.r")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('? **You do not have permissions**');
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
client.on('message', message => {
    if (message.content.startsWith("*info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Mixo Bot`` ')
            
            .addField('``Ping``:ping_pong: ' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``Name``' , `[ ${client.user.tag} ]` , true)
            .addField(':id: ' , `[ ${client.user.id} ]` , true)
            .addField('``Prefix``' , `[ * ]` , true)
            .addField('``Language``' , `[ Java Script ]` , true)
            .addField('``Founder ``' , ` [ [TGM]__ Mixo__[TGM]#1058] ` , true)
    })
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
  
  
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** no Permission Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. done**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. done**").catch(console.error);
});
  }

const embed = new Discord.RichEmbed
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('use:', '')
    .addField('done:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('by:', `${message.author.username}#${message.author.discriminator}`)
message.channel.sendEmbed(embed)

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
    .setFooter(message.guild.name)

   message.channel.send({embed});
      }
  });
  
 
client.on("message", (message) => {
    if (message.content.startsWith("*ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning: you dont have a Permission sory');
        var member= message.mentions.members.first();
         if (message.mentions.users.size < 1) return message.reply("**?Choose a person**");
        member.ban().then((member) => {
            message.channel.send(member.displayName + " bye :wave: ");
        }).catch(() => {
            message.channel.send(":interrobang: Error 404 -_-");
        });
    }
});
  client.on('message', message => {
    if (message.content.startsWith("*id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Name Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});
  
client.on('message' , message => {
var prefix = "*"

if (message.author.bot) return;
if (message.content.startsWith("*contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.reply('**أكتب رسالتك !**').then(msg => msg.delete(10000))
        message.delete();



client.users.get("330119000287608832").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ●الرسالة: " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : Mixo")
                                                

message.channel.send(embed);


}
    
});



client.on('message', message => {
  if (message.content === '*enable') {
    message.channel.send('enabling...');
    active = true
    message.channel.send('AutoRole successfully enabled!')
  }
});

client.on('message', message => {
  if (message.content === '*disable') {
    message.channel.send('disabling...');
    active = false
    message.channel.send('AutoRole successfully disabled!')
  }
});

client.on('message', message => {
  if (message.content === '*check') {
    switch (active) {
      case true:
        message.channel.send('Addon currently ACTIVE');
        break;
      case false:
        message.channel.send('addon currently DEACTIVE');
        break;
                  }
}});

client.on('guildMemberAdd', member => {
  if(active === true) {
    var role = member.guild.roles.find("name", "Members");
    member.addRole(role).catch(console.error);
  }
})
client.on('message', message => {
    if(message.content == '*bans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('`#` <@'+ user.id + '> `is banned`');
            });
        });
    }
});
 client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
💚 online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
❤  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
💛  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
💠   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:robot:  bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
  client.on('message', message => {
       if(message.content.startsWith(`*support`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("click here")
           .setURL('https://discord.gg/73RVbVg')
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });


  client.on('message', message => {
       if(message.content.startsWith(`*invite`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("click here")
           .setURL(' https://discordapp.com/oauth2/authorize?client_id=488059990708584479&permissions=8&scope=bot')
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });
     client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});
client.on("message", message => {
    var prefix = "-";
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#f0000") 
      .setDescription(`
prefix = "*"

*
=>[Admin Commands]=>

=>*kick <mention > => kick member from server

=> *ban <mention > => ban member from server

=> *clear => clear chat 

=> *vkick => كيك مومبر في الروم الوتي

=> *mute < mention > => mute member 

=> *unmute <mention> => unmute member 

=> *ct <name> => create channel

=> *cv <name> create voice channel

 => *bc <message> => message all members in server

 => *add.r => to add role
---------------------------------------------------------------
=>[General Commands]=>
=>[__]

=> *member => members info

=> *ser-av => server avatar

=> *id => your id

=> *avatar => your avatar account

=> *help => help by english

=> *ping => to see ping

=> *bot => bot informations 

=> *server => server informations 

=> *embed <message> => 

=> *say <message> => 

=> *contact <message> => To contact owner Bot

=> *enable => Enable auto role

Help ==> Discord :https://discord.gg/73RVbVg


      `)
      .setFooter('${message.author.tag}')
   message.channel.sendEmbed(embed)
    
   }
   }); 

  client.on('message', message => {
     if (message.content === (prefix + "*info")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});
  client.on('message', message => {

    if (message.content === "*count") {

    let embed = new Discord.RichEmbed()

.addField('**Count**: ' , message.guild.memberCount)
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});
  client.on('message' , function (message){
      var token = 'NDg4MDU5OTkwNzA4NTg0NDc5.DoUgug.Vu0mEMFZUPuG4E8AJOTcbk0PCz8'; // التوكن هنا بس
      if(message.content === '*mixo') {
if(message.author.id !== '330119000287608832') return message.reply('**الامر خاص بـ صاحب البوت وشكرا**');
          client.destroy();
          client.login(token) // لا تغيرها
var time = 7200000;
client.setInterval(function() {
    client.destroy();
    client.login(token) // لا تغيرها
  }, time);
}
})
client.on('message', message =>{

    if(message.content == "*roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith( "*vkick")) {
    try {
    if(!men) {
      message.channel.send("**الرجاء اخيار شخص لطرده !**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

    message.guild.createChannel("AgentX VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
}
  }
});
client.on('message', function(message) {
    if (message.content == "*clear ultra") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(error){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});
client.on("message", message => {
  if(message.content.startsWith("*bcall")) {
          let i = client.users.size;
              if(message.author.id !== '330119000287608832') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});
  client.on('message', ReBeeL => {
  var prefix = "*";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "bcowner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** -bcowner <message> **")
                return;
                  }      
                   var rebel = new Discord.RichEmbed()
                      .setColor("#000000")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${ReBeeL.guild.name}
الرسآلة 
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );
  

  client.on("guildCreate", guild => {
client.channels.get("494546753631289346").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});

client.on("guildDelete", guild => {
client.channels.get("494546753631289346").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});
  

  client.on('guildCreate', guild => {
client.channels.get("494546753631289346").send(`:white_check_mark: **${client.user.tag} دخل سيرفر :arrow_lower_left:
Server name: __${guild.name}__
----------------------------------------------------------
Server owner: __${guild.owner}__
----------------------------------------------------------
Server id: __${guild.id}__ 
-----------------------------------------------------------
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("494546753631289346").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر:airplane: 
Server name: __${guild.name}__
----------------------------------------------------------
Server owner: __${guild.owner}__
----------------------------------------------------------
Server id: __${guild.id}__
----------------------------------------------------------
Server Count: __${guild.memberCount}__**`)
});
  
  client.on('message', message => {
if(message.content.startsWith("*slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
    if(message.content.toLowerCase().startsWith( "*uptime")) {
      let upTime = process.uptime();
  
      let days = Math.floor(upTime / 86400);
      upTime %= 86400;
  
      let hrs = Math.floor(upTime / 3600);
      upTime %= 3600;
  
      let min = Math.floor(upTime / 60);
      let sec = Math.floor(upTime % 60);
  
      message.channel.send(`\`${days} days, ${hrs} hrs, ${min} min, ${sec} sec\``);
    }
});
  client.on('message', message => {
     if (message.content === ("*bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});

  client.on('message', message => {
   if(message.content.startsWith("*in")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
client.on('message', message =>{
  let args = message.content.split(' ');
  let prefix = '.';
if(args[0] === `*emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**أدخل الايموجي**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`**لم استطع العثور على الايموجي المطلوب**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});
client.on('message', OmarMessage => {
    var OmarNull = null;
    if(!OmarMessage.author.bot || OmarMessage.content.startsWith(prefix)) {
        if(OmarMessage.content.split(' ')[0] == `*CH`) {
            if(OmarMessage.guild.member(OmarMessage.author).hasPermission('MANAGE_CHANNELS') && OmarMessage.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) {
                let OmarEveryOne = OmarMessage.guild.roles.filter(r => r.name == `@everyone`).first();
                let i = 0;
                for (i; i <= OmarMessage.guild.channels.size; i++) {
                    let channel = OmarMessage.guild.channels.array()[i];
                    if(i == OmarMessage.guild.channels.size) {
                        OmarMessage.channel.send(`${OmarMessage.author}, تم اغلاق جميع الرومات`);
                    } else {
                        if(channel.type == 'text') {
                            channel.overwritePermissions(OmarEveryOne, {SEND_MESSAGES:false});
                        } else if(channel.type == 'voice') {
                            channel.overwritePermissions(OmarEveryOne, {CONNECT:false});
                        } else if(channel.type == 'category') {
                            channel.overwritePermissions(OmarEveryOne, {SEND_MESSAGES:false,CONNECT:false});
                        } else OmarNull;
                    };
                };
            };
        };
        if(OmarMessage.content.split(' ')[0] == `*OH`) {
            if(OmarMessage.guild.member(OmarMessage.author).hasPermission('MANAGE_CHANNELS') && OmarMessage.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) {
                let OmarEveryOne = OmarMessage.guild.roles.filter(r => r.name == `@everyone`).first();
                let i = 0;
                for (i; i <= OmarMessage.guild.channels.size; i++) {
                    let channel = OmarMessage.guild.channels.array()[i];
                    if(i == OmarMessage.guild.channels.size) {
                        OmarMessage.channel.send(`${OmarMessage.author}, تم فتح جميع الرومات`);
                    } else {
                        if(channel.type == 'text') {
                            channel.overwritePermissions(OmarEveryOne, {SEND_MESSAGES:true});
                        } else if(channel.type == 'voice') {
                            channel.overwritePermissions(OmarEveryOne, {CONNECT:true});
                        } else if(channel.type == 'category') {
                            channel.overwritePermissions(OmarEveryOne, {SEND_MESSAGES:true,CONNECT:true});
                        } else OmarNull;
                    };
                };
            };
        };
    };
});
  client.on('message', message => {
if(message.content.startsWith('-discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
          var args = message.content.split(" ").slice(1);
    let sent = 0
    let count = 1;
    
      if(args){
client.users.filter(u => u.discriminator == args[0]).forEach(u => {
    if(sent > 4){
     return
    }
    sent = sent + 1
      message.channel.send(`

      ** ${count}➥ ${u.tag}**
         
      `)
      count++;
})
}
}
if(message.content ===('*discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
  let sent = 0
    let count = 1;
          

client.users.filter(u => u.discriminator == message.author.discriminator).forEach(u => {
    if(sent > 4){
        return
    }
    sent = sent + 1
      message.channel.send(`

      ** ${count}➥ ${u.tag}**
         
      `)
      count++;
})
}
});
  
client.on('message', message => {
    if(!message.channel.guild) return;
  if(message.content.startsWith('*bc')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(' ').slice(1).join(' ');
  let copy = "Mixo Bot";
  let request = `Requested By ${message.author.username}`;
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
  
  message.guild.members.forEach(m => {
  var bc = new
  Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Broadcast')
  .addField('Server', message.guild.name)
  .addField('Sender', message.author.username)
  .addField('Message', args)
  .setThumbnail(message.author.avatarURL)
  .setFooter(copy, client.user.avatarURL);
  m.send({ embed:bc})
  msg.delete();
  })
  })
  
  };
  });
    const devs = ["your id"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');

  if (message.content.startsWith( 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ( "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith( 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith( 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith( 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith( '*setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith( 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
  
client.on("message", message => {
  if(message.content.startsWith("!!bcall")) {
          let i = client.users.size;
    if(message.author.id !== '330119000287608832') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});


client.login(process.env.BOT_TOKEN);
