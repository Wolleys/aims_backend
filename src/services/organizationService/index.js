const { getOneOrganization } = require("./getOneOrganization");
const { getAllOrganizations } = require("./getAllOrganizations");
const { createNewOrganization } = require("./createNewOrganization");
const { updateOneOrganization } = require("./updateOneOrganization");
const { deleteOneOrganization } = require("./deleteOneOrganization");

module.exports = {
    getAllOrganizations,
    getOneOrganization,
    createNewOrganization,
    updateOneOrganization,
    deleteOneOrganization,
};
