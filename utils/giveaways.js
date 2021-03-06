const {GiveawaysManager} = require('discord-giveaways');

module.exports = async (client) => {

    const manager = new GiveawaysManager(client, {
        storage: './src/config/json/giveaways.json',
        updateCountdownEvery: 10000,
        hasGuildMembersIntent: false,
        default: {
            botsCanWin: false,
            exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
            embedColor: '#b2d8FF',
            embedColorEnd: '#b2d8FF',
            reaction: '🎉'
        }
    });
    // We now have a giveawaysManager property to access the manager everywhere!
    client.giveawaysManager = manager;

}