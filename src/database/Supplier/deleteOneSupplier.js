const { Supplier } = require("./supplierModel");
const { Organization } = require("../Organization/organizationModel");

const deleteOneSupplier = async (organizationId, supplierId) => {
    const organizationExixts = await Organization().findOne({
        where: { id: organizationId },
    });
    if (!organizationExixts) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${organizationId}'`,
        };
    }
    try {
        const organization = await Supplier().destroy({
            where: { id: supplierId, organizationId },
        });
        if (!organization) {
            throw {
                status: 400,
                message: `Can't find a supplier with the id '${supplierId}'`,
            };
        }
        return organization;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneSupplier };
