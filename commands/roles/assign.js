const commando = require("discord.js-commando");

class AssignRoleCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "assign",
            group: "roles",
            memberName: "assign",
            description: "Assigns a specific role"
        });

    }

    async run(message, args) {
        function checkRole(elem) {
            return elem.name.toLowerCase() === args.toLowerCase();
        }
        var role = message.guild.roles.find(checkRole);
        if (role !== null && !message.member.roles.has(role.id)) {
            message.member.addRole(role);
        }  
    }
}

module.exports = AssignRoleCommand;
