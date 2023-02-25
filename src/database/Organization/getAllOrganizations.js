const { Organization } = require("./organizationModel");

const getAllOrganizations = async () => {
    try {
        const allOrganizations = await Organization().findAll({
            order: [["createdAt", "DESC"]],
        });
        return allOrganizations;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllOrganizations };
