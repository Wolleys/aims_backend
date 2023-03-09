const { Supplier } = require("./supplierModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneSupplier = async (organizationId, supplierId, changes) => {
    await checkOrganization(organizationId);

    const supplierExists = await Supplier().findOne({
        where: { id: supplierId, organizationId },
        attributes: ["id", "organizationId"],
    });
    if (!supplierExists) {
        throw {
            status: 400,
            message: `Can't find a supplier with the id '${supplierId}'`,
        };
    }

    try {
        const updateSupplier = await Supplier().update(
            { ...changes },
            { where: { id: supplierId, organizationId } }
        );
        if (!updateSupplier) {
            throw {
                status: 400,
                message: `Error while updating supplier with the id '${supplierId}'`,
            };
        }

        const returnUpdatedSupplier = await Supplier().findOne({
            where: { id: supplierId, organizationId },
            attributes: [
                "id",
                "first_name",
                "last_name",
                "company_name",
                "job_title",
                "phone_number",
                "website",
                "email",
            ],
        });
        return returnUpdatedSupplier;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneSupplier };
