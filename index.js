const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false,
});

function formatTime() {
    const date = new Date();
    const options = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}

client.on("ready", async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const getExtendURL = await Discord.RichPresence.getExternal(
        client,
        "1228018579509612616",
        "https://i.imgur.com/cF8nxaP.gif",
        "https://i.imgur.com/Bnsdhf1.jpeg"
    );

    const r = new Discord.RichPresence()
        .setApplicationId("1228018579509612616")
        .setType("STREAMING")
        .setURL("https://github.com/sunaookamishirokodev")
        .setName("Thuê tớ code đi OwO")
        .setState("ご主人様~ 愛してる")
        .setDetails(`あなたは私の夫になることができます`)
        .setStartTimestamp(Date.now())
        .setAssetsLargeImage(getExtendURL[0].external_asset_path)
        .setAssetsLargeText("Vê éc cốt là người bạn của chúng ta")
        .setAssetsSmallImage(getExtendURL[1].external_asset_path)
        .setAssetsSmallText("Alime, manga iz da béc")
        .addButton("Github của tui", "https://github.com/sunaookamishirokodev")
        .addButton(
            "Add bot của tui",
            "https://discord.com/oauth2/authorize?client_id=1247821220590780536&permissions=8&integration_type=0&scope=bot"
        );

    client.user.setActivity(r);
    client.user.setPresence({ status: "online" });

    let prevTime = null;
    setInterval(() => {
        const newTime = formatTime();
        if (newTime !== prevTime) {
            r.setDetails("Thuê tớ code đi UwU").setName("あなたは私の夫になることができます");
            client.user.setActivity(r);
            prevTime = newTime;
        }
    }, 1000);
});

const mySecret = require("./config.token.json");
client.login(mySecret);
