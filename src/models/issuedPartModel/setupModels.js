const { createNewIssuedPart } = require("./index");

function setupIssuedPartModels(sequelize) {
    try {
        // Create issued part model
        const IssuedPart = createNewIssuedPart(sequelize);

        return { IssuedPart };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupIssuedPartModels };
