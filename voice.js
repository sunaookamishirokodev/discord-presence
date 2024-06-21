const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false,
});
const { joinVoiceChannel } = require("@discordjs/voice");

client.on("ready", async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    setInterval(async () => {
        try {
            const channel = await client.channels.fetch("1208616320732495892");
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
            });
        } catch (error) {
            console.log(error);
        }
    });
});

const mySecret = require("./config.token.json");
client.login(mySecret);
