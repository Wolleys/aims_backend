const { model } = require("./organizationModel");

const createNewOrganization = async (newOrganization) => {
    try {
        const isAlreadyAdded = await model().findOne({
            where: { email: newOrganization.email },
        });
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `'${newOrganization.email}' is already in use!`,
            };
        }
        const createdOrganization = model().create(newOrganization);
        return createdOrganization;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewOrganization };
