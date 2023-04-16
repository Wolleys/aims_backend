const { createNewJob } = require("./index");

function setupJobModels(sequelize) {
    try {
        // Create job model
        const Job = createNewJob(sequelize);

        return { Job };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupJobModels };
