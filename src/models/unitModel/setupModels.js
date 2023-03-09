const { createNewUnit } = require("./index");

function setupUnitModels(sequelize) {
    try {
        // Create unit model
        const Unit = createNewUnit(sequelize);

        return { Unit };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupUnitModels };
