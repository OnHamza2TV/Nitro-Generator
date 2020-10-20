const Discord = require("discord.js");
const client = new Discord.Client();

const generator = require("generate-password");
const config = require("./config.js");

        const embed12 = new Discord.RichEmbed()
  .setTitle("Nitro :")
  .setColor(0x7289DA)
  .setDescription("🚀 Nitro code Gen regarder vos dm!")
  .setFooter("Nitro Gen by On Hamza")
  .setImage("https://cdn.discordapp.com/attachments/764825089471414275/767507440404922438/tenor_1.gif")

client.login(config.token);

client.on('ready', () => {
  console.log(`${client.user.username} starting...`);
  console.log(`Serving ${client.guilds.size} guilds.`);
  console.log(`${client.users.size} users`);
});

  client.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
              client.user.setActivity(config.status)
    },60000);

const getFake = () => {
    let nitrocode = generator.generate({ length: 24, numbers: true });
    return `https://discord.com/billing/promotions/xbox-game-pass/redeem/${nitrocode}`;
};

client.on("message", (message) => {

    if(message.author.bot || !message.guild) return;

        if(!message.content.startsWith(`${config.prefix}nitro`)) return message.delete();
        message.author.createDM().then((channel) => channel.send(getFake()));
        return message.channel.send(embed12);
});

client.login(config.token);
