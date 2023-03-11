const engineerService = require("../../services/engineerService");

const deleteOneEngineer = async (req, res) => {
    const engineerId = req.params.engineerId;
    const organizationId = req.params.organizationId;
    try {
        const deletedEngineer = await engineerService.deleteOneEngineer(
            organizationId,
            engineerId
        );
        res.status(200).json({ status: "OK", data: deletedEngineer });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneEngineer };
