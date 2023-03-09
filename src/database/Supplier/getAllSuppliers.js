const { Supplier } = require("./supplierModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { SupplierAvatar } = require("../SupplierAvatar/supplierAvatarModel");
const { SupplierAddress } = require("../SupplierAddress/supplierAddressModel");

const getAllSuppliers = async(organizationId) => {
    await checkOrganization(organizationId);
    
    try {
        const allSuppliers = await Supplier().findAll({
            where: { organizationId },
            order: [["createdAt", "DESC"]],
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
        return allSuppliers;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllSuppliers };
