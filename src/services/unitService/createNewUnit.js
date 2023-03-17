const Unit = require("../../database/Unit");

const createNewUnit = (organizationId, newUnit) => {
    const unitToInsert = {
        ...newUnit,
        organization_id: organizationId,
    };

    try {
        const createdUnit = Unit.createNewUnit(organizationId, unitToInsert);
        return createdUnit;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewUnit };
