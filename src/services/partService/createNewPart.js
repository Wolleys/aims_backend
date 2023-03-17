const Part = require("../../database/Part");

const createNewPart = (organizationId, newPart) => {
    const partToInsert = {
        ...newPart,
        organization_id: organizationId,
        supplier_id: newPart.supplier_id,
    };

    try {
        const createdPart = Part.createNewPart(
            organizationId,
            partToInsert
        );
        return createdPart;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewPart };
