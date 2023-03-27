const { Purchase } = require("./purchaseModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const getOnePurchase = async (organizationId, purchaseId) => {
    await checkOrganization(organizationId);

    try {
        const purchase = await Purchase().findOne({
            where: { id: purchaseId, organization_id: organizationId },
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
        if (!purchase) {
            throw {
                status: 404,
                message: `Can't find a purchase with the id '${purchaseId}'`,
            };
        }

        return purchase;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOnePurchase };
