const { Supplier } = require("./supplierModel");
const { Organization } = require("../Organization/organizationModel");

const deleteOneSupplier = async (organizationId, supplierId) => {
    const organizationExists = await Organization().findOne({
        where: { id: organizationId },
    });
    if (!organizationExists) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${organizationId}'`,
        };
    }
    try {
        const supplier = await Supplier().destroy({
            where: { id: supplierId, organizationId },
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
