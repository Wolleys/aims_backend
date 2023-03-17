const { createNewPart } = require("./index");
const { createPartPrice } = require("./partPrice");
const { createPartQuantity } = require("./partQuantity");

function setupPartModels(sequelize) {
    try {
        // Create part models
        const Part = createNewPart(sequelize);
        const PartPrice = createPartPrice(sequelize);
        const PartQuantity = createPartQuantity(sequelize);

        // *** Part 1:1 association ***
        Part.hasOne(PartPrice, {
            onDelete: "CASCADE",
            foreignKey: "part_id",
            as: "price",
        });
        Part.hasOne(PartQuantity, {
            onDelete: "CASCADE",
            foreignKey: "part_id",
            as: "quantity",
        });

        return {
            Part,
            PartPrice,
            PartQuantity,
        };
    } catch (error) {
        throw error;
    }
}

module.exports = { setupPartModels };
