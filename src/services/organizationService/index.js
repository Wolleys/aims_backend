const bcrypt = require("bcryptjs");
const Organization = require("../../database/Organization");

const getAllOrganizations = () => {
    try {
        const allOrganizations = Organization.getAllOrganizations();
        return allOrganizations;
    } catch (error) {
        throw error;
    }
};

const getOneOrganization = (organizationId) => {
    try {
        const organization = Organization.getOneOrganization(organizationId);
        return organization;
    } catch (error) {
        throw error;
    }
};

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

const updateOneOrganization = (organizationId, changes) => {
    try {
        const updatedOrganization = Organization.updateOneOrganization(
            organizationId,
            changes
        );
        return updatedOrganization;
    } catch (error) {
        throw error;
    }
};

const deleteOneOrganization = (organizationId) => {
    try {
        const organization = Organization.deleteOneOrganization(organizationId);
        return organization;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllOrganizations,
    getOneOrganization,
    createNewOrganization,
    updateOneOrganization,
    deleteOneOrganization,
};
