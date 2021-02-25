module.exports = {
    slash: {
        name: "ping",
        description: "ping pong",
        options: [
            {
                name: "name of this option",
                description: "description for this option",
                type: 1, // Type for this option. for a list of types see https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype
                default?: true,
                required?: true,
                choices?: [
                    {
                        name: "string to prefill for this choice",
                        value: "value of this choice that will be returned when command is used."
                    },
                    {
                        name: "string to prefill for this other choice",
                        value: "value of this other choice that will be returned when command is used."
                    }
                ]
            },
            {
                name: "name of this other option",
                description: "description for this other option",
                type: 1,
            }
        ]
    },
    run: async (client, interaction) => {
        try {
            interaction.channel.send("pong");
        } catch (error) {
            const CanalError = client.channels.cache.get('734497561485901906');
            CanalError.send(`Error en **"ping"** <@&734599009414676551>\n${error.toString()}\nMensaje: ${interaction.content}\nCanal: <#${interaction.channel.id}>\nServidor ${interaction.guild.name} / ${interaction.guild.id}`);
            console.log(error);
        }
    }
}




options: [
    {
        name: "tag1",
        description: "first tag",
        type: 6,
        required: true
    },
    {
        name: "tag2",
        description: "first tag",
        type: 6,
        required: true
    }
]