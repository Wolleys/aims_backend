const { getOneIssuedPart } = require("./getOneIssuedPart");
const { getAllIssuedParts } = require("./getAllIssuedParts");
const { createNewIssuedPart } = require("./createNewIssuedPart");
const { updateOneIssuedPart } = require("./updateOneIssuedPart");
const { deleteOneIssuedPart } = require("./deleteOneIssuedPart");

module.exports = {
    getOneIssuedPart,
    getAllIssuedParts,
    createNewIssuedPart,
    updateOneIssuedPart,
    deleteOneIssuedPart,
};
