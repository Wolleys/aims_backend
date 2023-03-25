const { Purchase } = require("./purchaseModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getAllPurchases = async (organizationId) => {
    await checkOrganization(organizationId);

    try {
        const allPurchases = await Purchase().findAndCountAll({
            where: { organization_id: organizationId },
            order: [["created_at", "DESC"]],
            attributes: [
                "id",
                "date_of_purchase",
                "quantity_received",
                "part_status",
                "shelf_life",
                "duration",
                "expiry_date",
                "bp_in_usd",
                "bp_in_local",
                "sp_in_usd",
                "supplier_id",
                "part_id",
            ],
        });
        return allPurchases;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllPurchases };
