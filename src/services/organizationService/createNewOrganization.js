const Organization = require("../../database/Organization");
const { hashPassword } = require("../../middlewares/auth/bcrypt");

const createNewOrganization = async (newOrganization) => {
    const hashedPassword = await hashPassword(newOrganization.password);
    const organizationToInsert = {
        ...newOrganization,
        password: hashedPassword,
    };
    try {
        const createdOrganization =
            Organization.createNewOrganization(organizationToInsert);
        return createdOrganization;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewOrganization };
