const { model } = require("./organizationModel");

const getAllOrganizations = async () => {
    try {
        const allOrganizations = await model().findAll({
            order: [["createdAt", "DESC"]],
        });
        return allOrganizations;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllOrganizations };
