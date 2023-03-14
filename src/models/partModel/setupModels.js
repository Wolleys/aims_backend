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
        // Part has one price (belongsTo) 1:1
        // Part has one quantity (belongsTo) 1:1
        Part.hasOne(PartPrice, { onDelete: "CASCADE" });
        Part.hasOne(PartQuantity, { onDelete: "CASCADE" });
        PartPrice.belongsTo(Part);
        PartQuantity.belongsTo(Part);

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
