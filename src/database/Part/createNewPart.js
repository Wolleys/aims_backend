const { Part } = require("./partModel");
const { sequelize } = require("../dbConfig");
const { Unit } = require("../Unit/unitModel");
const { Supplier } = require("../Supplier/supplierModel");
const { PartPrice } = require("../PartPrice/partPriceModel");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { checkOrganization } = require("../helpers/checkOrganization");
const { PartQuantity } = require("../PartQuantity/partQuantityModel");

const createNewPart = async (organizationId, newPart) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const supplierExist = await Supplier().findOne({
            where: { id: newPart.supplier_id, organization_id: organizationId },
            attributes: ["id", "organization_id"],
        });
        if (!supplierExist) {
            throw {
                status: 400,
                message: `Can't find a supplier with the id '${newPart.supplier_id}'`,
            };
        }

        const unitExist = await Unit().findOne({
            where: { id: newPart.unit_id, organization_id: organizationId },
            attributes: ["id", "organization_id"],
        });
        if (!unitExist) {
            throw {
                status: 400,
                message: `Can't find a unit with the id '${newPart.unit_id}'`,
            };
        }

        // Check if part number already exists
        const partNumCol = "part_number";
        const partNumVal = newPart.part_number;
        const partNumAttrs = ["part_number", "organization_id"];
        await isAlreadyAdded(Part, partNumCol, partNumVal, organizationId, partNumAttrs);

        const createdPart = await Part().create(newPart, {
            transaction,
        });

        const quantity = {
            ...newPart,
            part_id: createdPart.id,
        };

        const price = {
            ...newPart,
            part_id: createdPart.id,
        };

        await PartPrice().create(price, { transaction });
        await PartQuantity().create(quantity, { transaction });
        await transaction.commit();

        return createdPart;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewPart };
