const { Supplier } = require("./supplierModel");
const { findItem } = require("../helpers/findItem");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneSupplier = async (organizationId, supplierId, changes) => {
    await checkOrganization(organizationId);

    const findSupplier = "a supplier";
    await findItem(Supplier, findSupplier, supplierId, organizationId);

    try {
        const updateSupplier = await Supplier().update(
            { ...changes },
            { where: { id: supplierId, organization_id: organizationId } }
        );
        if (!updateSupplier) {
            throw {
                status: 400,
                message: `Error while updating supplier with the id '${supplierId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneSupplier };
