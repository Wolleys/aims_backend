const Engineer = require("../../database/Engineer");

const createNewEngineer = (organizationId, newEngineer) => {
    const engineerToInsert = {
        ...newEngineer,
        organization_id: organizationId,
    };

    try {
        const createdEngineer = Engineer.createNewEngineer(
            organizationId,
            engineerToInsert
        );
        return createdEngineer;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewEngineer };
