const { Part } = require("./partModel");
const { sequelize } = require("../dbConfig");
const { Unit } = require("../Unit/unitModel");
const { Supplier } = require("../Supplier/supplierModel");
const { PartPrice } = require("../PartPrice/partPriceModel");
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

        const isAlreadyAdded = await Part().findOne({
            where: {
                part_number: newPart.part_number,
                organization_id: organizationId,
            },
            attributes: ["part_number", "organization_id"],
        });
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `'${newPart.part_number}' has already been added!`,
            };
        }

        const createdPart = await Part().create(newPart, {
            transaction,
        });

        const quantity = {
            starting_quantity: newPart.starting_quantity,
            quantity_received: newPart.quantity_received,
            quantity_issued: newPart.quantity_issued,
            quantity_on_hand: newPart.quantity_on_hand,
            reorder_level: newPart.reorder_level,
            part_id: createdPart.id,
        };

        const price = {
            bp_in_usd: newPart.bp_in_usd,
            bp_in_local: newPart.bp_in_local,
            sp_in_usd: newPart.sp_in_usd,
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
