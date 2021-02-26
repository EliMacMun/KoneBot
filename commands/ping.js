module.exports = {
    slash: {
        name: "ping",
        description: "ping pong"
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