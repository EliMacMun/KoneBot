# slash-command-handler

Plantilla para tu bot de discord usando los **Slash Commands**.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas, y subir el proyecto a heroku para mantenerlo activo.

## Pre-requisitos 📋

Que cosas necesitas para instalar el software

* [GIT](https://git-scm.com/downloads)
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* Editor de código
  * Recomendado: [Visual Studio Code](https://code.visualstudio.com/download)
* [Node.js](https://nodejs.org/es/download/)

## Instalación 🔧

1. Dirigete a la ruta en la **terminal** donde se clonará el proyecto
```console
cd /proyectos
```
2. Clona el repositorio
```console
git clone https://github.com/EliMacMun/slash-command-handler
```
3. Instala las dependencias nesesarias
```console
npm i
```
4. crea un archivo `.env` para agregar las variables de entorno nesesarias
5. Crea una aplicación de discord en la página de [DIscord Developers](https://discord.com/developers/applications/). Para hacerlo tienes que:
  * Presiona en **New Aplication**
  ![paso1](https://media.discordapp.net/attachments/814715456572751904/814715476927184906/unknown.png)
  * Escribe un nombre y presiona **Create**
  ![paso2](https://cdn.discordapp.com/attachments/814715456572751904/814715769304252467/unknown.png)
  * Selecciona la opción de **Bot** y despues presiona **Add Bot**
  ![paso3](https://media.discordapp.net/attachments/814715456572751904/814716027865792532/unknown.png)
6. Coloca el **Token** y el **ID del bot** en el arcchivo .env de la siguiente manera
```env
TOKEN_DISCORD=token_del_bot
BOT_ID=id_del_bot
```
  * El Toquen se encuentra aquí
  ![discord1](https://media.discordapp.net/attachments/814715456572751904/814716379139801149/unknown.png)
  * El ID se encuentra aquí
  ![discord2](https://media.discordapp.net/attachments/814715456572751904/814716527793668116/unknown.png)
7. Seleccione la opcion de OAuth2 y marque las casillas `Bot`, `aplications.commans` y `Administrator` y despues dele click en el botón de `Copy`
![discord3](https://media.discordapp.net/attachments/814715456572751904/814737218743566366/unknown.png)
8. Dirijase al link que copió, seleccióne un Servidor y presione `Continuar`
![discord4](https://cdn.discordapp.com/attachments/814715456572751904/814738525349871626/unknown.png)
9. Presione `Autorizar`
![discord5](https://cdn.discordapp.com/attachments/814715456572751904/814738901515501568/unknown.png)
0. tendrá que pasar por un captcha y el bot se agregará al servidor
![discord6](https://cdn.discordapp.com/attachments/814715456572751904/814739315090915408/unknown.png)
## Personalización 🛠️

Para agregar comandos solo debe agregar un arcchivo con la extención `.js` en la carpeta de `commands`
El contenido debe tener la siguiente estructura
```js
module.exports = {
    slash: {
        // ApplicationCommandOption
    },
    run: async (client, interaction) => {
        // Codigo a ejecutar
    }
}
```
ejemplo: 
```js
module.exports = {
    slash: {
        name: "ping",
        description: "ping pong"
    },
    run: async (client, interaction) => {
        interaction.channel.send("pong");
    }
}
```
Si requiere de más información puede revisar la documentación del modulo utilizado [discord-slash-commands-client](https://www.npmjs.com/package/discord-slash-commands-client) y la documentación oficial de [Discord API](https://discord.com/developers/docs/interactions/slash-commands)

## Ejecutando las pruebas ⚙️

Para ejecutar pruebas mientras se desarrolla use el comando `npm run dev` el cual reiniciará la aplicación cada que se detecte un cambio.
Si no quiere que se reinicie la aplicacion apenas detecte el cambio utilize el comando `npm run start`.
Para parar el proceso solo basta con presionar `ctrl` + `c` en la terminal.

## Despliegue 📦

Para desplegar el bot en [heroku](https://dashboard.heroku.com/) debe seguir los siguientes pasos (deberá registrarse previente)

1. Cree una aplicación el su [dashboard](https://dashboard.heroku.com/apps) dando click en `New` y seleccionando `Create new app`
![heroku1](https://cdn.discordapp.com/attachments/814715456572751904/814725371147976764/unknown.png)
2. Ingrese un nombre para la aplicación y presione en `Create app`
![heroku2](https://cdn.discordapp.com/attachments/814715456572751904/814726045789192192/unknown.png)
3. Ahora en la terminal de su proyecto inicie sesión en heroku ejecutando
```console
heroku login
```
4. Seleccióne la aplicación ejecutando en la terminal
```console
heroku git:remote -a nombre-de-la-app-de-heroku
```
5. Prepare los archivos con el comando
```console
git add .
```
6. Haga commit de los cambios ejecutando
```console
git commit -am "first commit"
```
7. Despliegue la aplicación ejecutando
```console
git push heroku master
```
7. una vez terminado el proceso valla a la dashboard de heroku en la sección de `Resources` y edite los Dynos apagando el `web` y encendiendo el `worker` (de no aparecer el worker refresque la página)
![heroku3](https://cdn.discordapp.com/attachments/814715456572751904/814729335214702672/unknown.png)
8. Dirijase a la sección de `Settings` y presione en `Reveal Config Vars`
![heroku4](https://cdn.discordapp.com/attachments/814715456572751904/814729951117967360/unknown.png)
9. Ingrese las variables de entorno que agregó en el archivo `.env` y presione `Add`
![heroku5](https://cdn.discordapp.com/attachments/814715456572751904/814730415675801610/unknown.png)

Una vez terminado el bot estará activo y cada que se requiera utilizar se tendrá que repetir los pasos 5 - 7
Recuerde que el archivo `.env` no se deberá de subir o compartir