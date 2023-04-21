const { partModel } = require("../partModel/part");
const { issuedPartHistoryModel } = require("./issuedPartHistory");
const { issuedPartModel } = require("../issuedPartModel/issuedPart");

function issuedPartHistoryAssociations(sequelize) {
    try {
        // Initialize models
        const Part = partModel(sequelize);
        const IssuedPart = issuedPartModel(sequelize);
        const IssuedPartHistory = issuedPartHistoryModel(sequelize);

        // 1. Issued Part belongs to many Parts n:m
        IssuedPart.belongsToMany(Part, {
            through: IssuedPartHistory,
            foreignKey: "issued_part_id",
        });
        Part.belongsToMany(IssuedPart, {
            through: IssuedPartHistory,
            foreignKey: "part_id",
        });

        return { IssuedPartHistory };
    } catch (error) {
        throw error;
    }
}

module.exports = { issuedPartHistoryAssociations };
