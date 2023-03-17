const { Supplier } = require("./supplierModel");
const { deleteItem } = require("../helpers/deleteItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneSupplier = async (organizationId, supplierId) => {
    await checkOrganization(organizationId);
    
    try {
        const itemToFind = "a supplier";
        await deleteItem(Supplier, itemToFind, supplierId, organizationId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneSupplier };
