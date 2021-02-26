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
client.interactions = new interactions.Client(process.env.TOKEN_DISCORD, '772695649778139146');

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
            console.error("Error")
            if (error.response.data.errors.options) {
                for (const option in error.response.data.errors.options) {
                    console.log('Option ', option, ': ' ,error.response.data.errors.options[option].name)
                }
            } else if (error.response.data.errors.name){
                console.error(error.response.data.errors.name)
            } else {
                console.error(error.response.data.errors)
            }
        });
    })
});

client.on("interactionCreate", async (interaction) => {
    console.log(interaction)
    const cmd = await client.commands.get(interaction.name);
    if (cmd) {
        cmd.run(client, interaction);
    }
});

client.on('message', async (message) => {
    console.log(message.content)
})