const { getOneOrganization } = require("./getOneOrganization");
const { getAllOrganizations } = require("./getAllOrganizations");
const { createNewOrganization } = require("./createNewOrganization");
const { updateOneOrganization } = require("./updateOneOrganization");
const { deleteOneOrganization } = require("./deleteOneOrganization");

module.exports = {
    getOneOrganization,
    getAllOrganizations,
    createNewOrganization,
    updateOneOrganization,
    deleteOneOrganization,
};
