const { Part } = require("./partModel");
const { PartPrice } = require("../PartPrice/partPriceModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");

const getOnePart = async (organizationId, partId) => {
    await checkOrganization(organizationId);

    try {
        const part = await Part().findOne({
            where: { id: partId, organization_id: organizationId },
            attributes: [
                "id",
                "date_of_entry",
                "description",
                "part_number",
                "serial_number",
                "part_status",
                "location",
                "date_of_production",
                "shelf_life",
                "duration",
                "expiry_date",
            ],
            include: [
                {
                    model: PartQuantity(),
                    as: "quantity",
                    attributes: [
                        "id",
                        "starting_quantity",
                        "quantity_received",
                        "quantity_issued",
                        "quantity_on_hand",
                        "reorder_level",
                    ],
                },
                {
                    model: PartPrice(),
                    as: "price",
                    attributes: ["id", "bp_in_usd", "bp_in_local", "sp_in_usd"],
                },
            ],
        });
        if (!part) {
            throw {
                status: 404,
                message: `Can't find a part with the id '${partId}'`,
            };
        }
        return part;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOnePart };
