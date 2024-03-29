const { SupplierAddress } = require("./supplierAddressModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneAddress = async (organizationId, supplierId, changes) => {
    await checkOrganization(organizationId);

    const supplierExists = await SupplierAddress().findOne({
        where: { supplier_id: supplierId },
        attributes: ["supplier_id"],
    });
    if (!supplierExists) {
        throw {
            status: 404,
            message: `Can't find a supplier with the id '${supplierId}'`,
        };
    }

    try {
        const addressToUpdate = await SupplierAddress().update(
            { ...changes },
            { where: { supplier_id: supplierId } }
        );
        if (!addressToUpdate) {
            throw {
                status: 400,
                message: `Error while updating supplier address with the id '${supplierId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneAddress };
