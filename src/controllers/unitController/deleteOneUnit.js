const unitService = require("../../services/unitService");

const deleteOneUnit = async (req, res) => {
    const deletedUnit = unitService.deleteOneUnit();
    res.send("Delete an existing unit");
};

module.exports = { deleteOneUnit };
