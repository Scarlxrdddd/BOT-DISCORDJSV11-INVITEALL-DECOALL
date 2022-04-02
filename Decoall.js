const Discord = require('discord.js'),
    client = new Discord.Client(),
    tokens = ['UR TOKEN OF YOUR MAIN ACCOUNT OR SECOND ACCOUNT NOT BOT TOKEN'],
    id = 'ID DU DISCORD'

client.on('ready', async () => {
    const _guild = client.guilds.get(id),
        voiceChannels = client.channels.filter(
            (channel) =>
                channel.type === 'voice' &&
                channel.guild &&
                _guild.id == channel.guild.id
        )

    voiceChannels.forEach(async (voiceChannel) => {
        voiceChannel.members.forEach(async (member) => {
            try {
                for (let i = 0; i <40; i++)
                await member.setVoiceChannel(null)
            } catch (_) {
                0
            }
        })
    })
})

tokens.forEach(async (token) => client.login(token))
