const { SupplierAddress } = require("./supplierAddressModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const updateOneAddress = async (organizationId, supplierId, changes) => {
    await checkOrganization(organizationId);

    const supplierExists = await SupplierAddress().findOne({
        where: { supplierId },
        attributes: ["supplierId"],
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
            { where: { supplierId } }
        );
        if (!addressToUpdate) {
            throw {
                status: 400,
                message: `Error while updating supplier address with the id '${supplierId}'`,
            };
        }

        const returnUpdatedAddress = await SupplierAddress().findOne({
            where: { supplierId },
            attributes: [
                "id",
                "country",
                "address_line_1",
                "address_line_2",
                "city",
                "region",
                "postal_code",
            ],
        });
        return returnUpdatedAddress;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneAddress };
