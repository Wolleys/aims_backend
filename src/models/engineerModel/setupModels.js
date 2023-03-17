const { createNewEngineer } = require("./index");
const { createEngineerAvatar } = require("./engineerAvatar");

function setupEngineerModels(sequelize) {
    try {
        // Create engineer models
        const Engineer = createNewEngineer(sequelize);
        const EngineerAvatar = createEngineerAvatar(sequelize);

        // *** Engineer 1:1 association ***
        Engineer.hasOne(EngineerAvatar, {
            onDelete: "CASCADE",
            foreignKey: "engineer_id",
            as: "avatar",
        });

        return {
            Engineer,
            EngineerAvatar,
        };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupEngineerModels };
