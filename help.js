// Standard Replies
client.on('message', msg => {
  if (msg.content === 'insert text here') {
    // Text Reply
    msg.reply('insert text here')
    // Image reply
    msg.reply('text if needed here' { files: ['image location'] });
  }
})

// Manual Message
client.on('ready', () => {
	const generalChannel = client.channels.get('insert channel id here');
	generalChannel.send('insert text here');
  // For custom emoji
   generalChannel.send("<:emoji_name:emoji_id>")
});

 // Manual Images
client.on('ready', () => {
     var generalChannel = client.channels.get("insert channel id here") // Replace with known channel ID

     // Provide a path to a local file
     const localFileAttachment = new Discord.Attachment('insert file location here')
     generalChannel.send(localFileAttachment)

     // Provide a URL to a file
     const webAttachment = new Discord.Attachment('insert url here')
     generalChannel.send(webAttachment)
})

// Reactions
client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }

    // You can copy/paste the actual unicode emoji in the code (not _every_ unicode emoji works)
    receivedMessage.react("👍")
    // Unicode emojis: https://unicode.org/emoji/charts/full-emoji-list.html

    // Get every custom emoji from the server (if any) and react with each one
    receivedMessage.guild.emojis.forEach(customEmoji => {
        console.log(`Reacting with custom emoji: ${customEmoji.name} (${customEmoji.id})`)
        receivedMessage.react(customEmoji)
    })
    // If you know the ID of the custom emoji you want, you can get it directly with:
    // let customEmoji = receivedMessage.guild.emojis.get(emojiId)
})

// Welcoming
client.on('guildMemberAdd', member => {
    member.guild.channels.get('channelID').send("insert welcoming text here");
});

//Token
client.login('insert discord bot token here')
