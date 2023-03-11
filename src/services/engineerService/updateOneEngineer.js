const Engineer = require("../../database/Engineer");

const updateOneEngineer = (organizationId, engineerId, changes) => {
    try {
        const engineer = Engineer.updateOneEngineer(
            organizationId,
            engineerId,
            changes
        );
        return engineer;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneEngineer };
