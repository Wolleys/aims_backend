const { createNewOrganization } = require("./organizationModel");

function setupModels(sequelize) {
    try {
        const Organizations = createNewOrganization(sequelize);

        return {
            Organizations,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };
