module.exports = {
    slash: {
        name: "example",
        description: "description",
        options: [
            {
                name: "firstOption",
                description: "description for this option",
                type: 	3, // Type for this option. for a list of types see https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype
                default: false,
                required: true,
                choices: [
                    {
                        name: "first Value",
                        value: "value of this choice that will be returned when command is used."
                    },
                    {
                        name: "second Value",
                        value: "value of this other choice that will be returned when command is used."
                    }
                ]
            },
            {
                name: "secondOption",
                description: "description for this other option",
                type: 3,
            }
        ]
    },
    run: async (client, interaction) => {
        try {
            console.log(interaction)
            interaction.channel.send("pong");
        } catch (error) {
            const CanalError = client.channels.cache.get('734497561485901906');
            CanalError.send(`Error en **"ping"** <@&734599009414676551>\n${error.toString()}\nMensaje: ${interaction.content}\nCanal: <#${interaction.channel.id}>\nServidor ${interaction.guild.name} / ${interaction.guild.id}`);
            console.log(error);
        }
    }
}