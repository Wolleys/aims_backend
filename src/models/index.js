const { modelsAssociations } = require("./modelsAssociations");

function setupModels(sequelize) {
    try {
        const associations = modelsAssociations(sequelize);

        return {
            ...associations,
        };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };
