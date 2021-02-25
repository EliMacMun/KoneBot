require("dotenv").config();
const interactions = require("discord-slash-commands-client");
const { Client, Collection } = require("discord.js");
const client = new Client({
    ws: {
        intents: 1923,
    },
});
client.login(process.env.TOKEN_DISCORD);
client.commands = new Collection();

let commandsDir = fs.readdirSync("./commands").filter((f) => f.endsWith(".js"));
for (let file of commandsDir) {
    let command = require("./commands/" + file);
    client.commands.set(command.slash.name, command);
    console.log("\x1b[35m%s\x1b[0m", archi, "fue cargado correctamente");
}

client.on("ready", () => {
    console.log("Ready")
})

client.interactions = new interactions.Client(process.env.TOKEN_DISCORD, client.user.id);
client.on("interactionCreate", (interaction) => {
    const cmd = client.commands.get(command);
    if (cmd) {
        cmd.run(client, interaction);
    }
});
