const { Supplier } = require("./supplierModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const deleteOneSupplier = async (organizationId, supplierId) => {
    await checkOrganization(organizationId);
    
    try {
        const supplier = await Supplier().destroy({
            where: { id: supplierId, organization_id: organizationId },
            attributes: ["id", "organization_id"],
        });
        if (!supplier) {
            throw {
                status: 400,
                message: `Can't find a supplier with the id '${supplierId}'`,
            };
        }
        return supplier;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneSupplier };
