const { getModels } = require("../../database/dbConfig");

// Get models from request
const attachModels = (req, res, next) => {
    try {
        req.models = getModels();
        next();
    } catch (error) {
        throw error;
    }
};

module.exports = attachModels;
