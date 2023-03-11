const Engineer = require("../../database/Engineer");

const deleteOneEngineer = (organizationId, engineerId) => {
    try {
        const engineer = Engineer.deleteOneEngineer(organizationId, engineerId);
        return engineer;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneEngineer };
