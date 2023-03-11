const Engineer = require("../../database/Engineer");

const getAllEngineers = (organizationId) => {
    try {
        const allEngineers = Engineer.getAllEngineers(organizationId);
        return allEngineers;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllEngineers };
