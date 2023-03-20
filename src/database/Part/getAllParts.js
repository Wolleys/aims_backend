const { Op } = require("sequelize");
const { Part } = require("./partModel");
const { PartPrice } = require("../PartPrice/partPriceModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");

const getAllParts = async (organizationId, filterParams) => {
    await checkOrganization(organizationId);
    
    var condition = filterParams
        ? {
            [Op.or]: {
                description: { [Op.like]: `%${filterParams}%` },
                part_number: { [Op.like]: `%${filterParams}%` },
                serial_number: { [Op.like]: `%${filterParams}%` },
                location: { [Op.like]: `%${filterParams}%` },
            },
        }
        : null;

    try {
        const allParts = await Part().findAndCountAll({
            where: { organization_id: organizationId, ...condition },
            order: [["created_at", "DESC"]],
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
        return allParts;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllParts };
