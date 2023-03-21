const { Op } = require("sequelize");
const { Part } = require("./partModel");
const { PartPrice } = require("../PartPrice/partPriceModel");
const { getPagination } = require("../helpers/getPagination");
const { getPagingData } = require("../helpers/getPagingData");
const { checkOrganization } = require("../helpers/checkOrganization");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");

const getAllParts = async (organizationId, page, size, q) => {
    await checkOrganization(organizationId);

    var condition = q
        ? {
            [Op.or]: {
                description: { [Op.like]: `%${q}%` },
                part_number: { [Op.like]: `%${q}%` },
                serial_number: { [Op.like]: `%${q}%` },
                location: { [Op.like]: `%${q}%` },
            },
        }
        : null;

    const { limit, offset } = getPagination(page, size);

    try {
        const allParts = await Part().findAndCountAll({
            limit,
            offset,
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

        return getPagingData(allParts, page, limit);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllParts };
