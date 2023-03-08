const Aircraft = require("../../database/Aircraft");

const getAllAircrafts = (organizationId) => {
    try {
        const allAircrafts = Aircraft.getAllAircrafts(organizationId);
        return allAircrafts;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllAircrafts };
