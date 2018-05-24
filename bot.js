const Discord = require("discord.js")
const client = new Discord.Client()

confirmed_dict = {}
temp_list = []

client.login("NDQ4OTA3NDU5MTkzNDcwOTc2.DeieGA.qABb4dTbCoKgBWZmjrzrGYiJIHI");

client.on("message", message => {
  if (message.content == "!confirm yes") {
    if (message.author.username in confirmed_dict) {
      message.reply("You have already confirmed. If you wish to change your confirmation, type '!confirm change'");
    } else {
      confirmed_dict[message.author.username] = "yes";
      message.reply("Successfully added.");
    }    
  } else if (message.content == "!confirm no") {
    if (message.author.username in confirmed_dict)  {
      message.reply("You have already confirmed. If you wish to change your confirmation, type '!confirm change'");
    } else {
      confirmed_dict[message.author.username] = "no";
      message.reply("Successfully added.");
    }
  } else if (message.content == "!confirm clear") {
    confirmed_dict = {};
    message.delete() 
  } else if (message.content == "!confirm show") {
    message.reply("The following people have confirmed:\n")
    for (var key in confirmed_dict) {
      message.channel.send(key + " : " + confirmed_dict[key])
    }
  } else if (message.content == "!confirm status") {
      if (message.author.username in confirmed_dict) {
      message.reply(confirmed_dict[message.author.username]);
      } else {
        message.reply("You haven't confirmed.")
      }
  } else if (message.content == "!confirm change") {
    if (message.author.username in confirmed_dict) {
      if (confirmed_dict[message.author.username] == "yes") {
        confirmed_dict[message.author.username] = "no"
      } else {
        confirmed_dict[message.author.username] = "yes"
      }
      message.reply("Successfully changed.")
    } else {
      message.reply("You haven't confirmed.")
    }
  } else if (message.content == "!confirm help") {
    message.reply("The commands for the 'confirm bot' are as follows:\n\
Type '!confirm yes' to add your name to the confirmed list with the tag yes.\n\
Type '!confirm no' to add your name to the confirmed list with the tag no.\n\
Type '!confirm change' to change the status of your confirmation.\n\
Type '!confirm status' to show your current confirmation status.\n\
Type '!confirm show' to show the list of currently confirmed people.");
  }
})
