require("dotenv").config();
const interactions = require("discord-slash-commands-client");
const fs = require("fs")
const { Client, Collection } = require('discord.js');
const client = new Client({
    ws: {
        intents: 1923,
    },
});
client.login(process.env.TOKEN_DISCORD);
client.interactions = new interactions.Client(process.env.TOKEN_DISCORD, 'id-bot');

client.commands = new Collection();

let commandsDir = fs.readdirSync("./commands").filter((f) => f.endsWith(".js"));
// console.log(commandsDir)
for (let file of commandsDir) {
    let command = require("./commands/" + file);
    client.commands.set(command.slash.name, command);
    console.log("\x1b[35m%s\x1b[0m", file, "fue cargado correctamente");
}
client.on("ready", () => {
    console.log("Ready");
    client.commands.map(command => {
        client.interactions
        .createCommand(command.slash)
        .then(response => {
            console.log(response.name+' created')
        })
        .catch((error) => {
            console.log("Error")
            console.error(error.response.data.errors.options['0'])
        });
    })
});

client.on("interactionCreate", (interaction) => {
    const cmd = await client.commands.get(command);
    if (cmd) {
        cmd.run(client, interaction);
    }
});