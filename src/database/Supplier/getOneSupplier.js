const { Supplier } = require("./supplierModel");
const { Organization } = require("../Organization/organizationModel");
const { SupplierAvatar } = require("../SupplierAvatar/supplierAvatarModel");
const { SupplierAddress } = require("../SupplierAddress/supplierAddressModel");

const getOneSupplier = async (organizationId, supplierId) => {
    const confirmIdParam = await Organization().findOne({
        where: { id: organizationId },
    });
    if (!confirmIdParam) {
        throw {
            status: 404,
            message: `Can't find an organization with the id '${organizationId}'`,
        };
    }

    try {
        const supplier = await Supplier().findOne({
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
            include: [
                {
                    model: SupplierAddress(),
                    attributes: [
                        "id",
                        "country",
                        "address_line_1",
                        "address_line_2",
                        "city",
                        "region",
                        "postal_code",
                    ],
                },
                {
                    model: SupplierAvatar(),
                    attributes: ["id", "avatar"],
                },
            ],
        });
        if (!supplier) {
            throw {
                status: 404,
                message: `Can't find a supplier with the id '${supplierId}'`,
            };
        }
        return supplier;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneSupplier };
