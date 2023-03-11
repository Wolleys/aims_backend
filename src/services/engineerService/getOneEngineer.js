const Engineer = require("../../database/Engineer");

const getOneEngineer = (organizationId, engineerId) => {
    try {
        const engineer = Engineer.getOneEngineer(organizationId, engineerId);
        return engineer;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneEngineer };
