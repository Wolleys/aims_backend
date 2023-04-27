const { partModel } = require("../partModel/part");
const { hangarUseHistoryModel } = require("./hangarUseHistory");
const { hangarUseModel } = require("../hangarUseModel/hangarUse");

function hangarUseHistoryAssociations(sequelize) {
    try {
        // Initialize models
        const Part = partModel(sequelize);
        const HangarUse = hangarUseModel(sequelize);
        const HangarUseHistory = hangarUseHistoryModel(sequelize);

        // 1. Hangar Use belongs to many Parts n:m
        HangarUse.belongsToMany(Part, {
            through: HangarUseHistory,
            foreignKey: "issued_part_id",
        });
        Part.belongsToMany(HangarUse, {
            through: HangarUseHistory,
            foreignKey: "part_id",
        });

        return { HangarUseHistory };
    } catch (error) {
        throw error;
    }
}

module.exports = { hangarUseHistoryAssociations };
