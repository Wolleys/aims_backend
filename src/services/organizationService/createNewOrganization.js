const bcrypt = require("bcryptjs");
const Organization = require("../../database/Organization");

const createNewOrganization = async (newOrganization) => {
    const hashPassword = async (plaintextPassword) => {
        const hash = await bcrypt.hash(plaintextPassword, 10);
        return hash;
    };
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
