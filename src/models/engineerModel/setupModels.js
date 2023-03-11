const { createNewEngineer } = require("./index");
const { createEngineerAvatar } = require("./engineerAvatar");

function setupEngineerModels(sequelize) {
    try {
        // Create engineer models
        const Engineer = createNewEngineer(sequelize);
        const EngineerAvatar = createEngineerAvatar(sequelize);

        // *** Engineer 1:1 association ***
        // Engineer has one avatar (belongsTo) 1:1
        Engineer.hasOne(EngineerAvatar, { onDelete: "CASCADE" });
        EngineerAvatar.belongsTo(Engineer);

        return { Engineer, EngineerAvatar };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupEngineerModels };
