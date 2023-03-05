const requireParams = (params) => (req, res, next) => {
    const reqParamList = Object.keys(req.params);
    const hasAllRequiredParams = params.every((param) =>
        reqParamList.includes(param)
    );
    if (!hasAllRequiredParams)
        return res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    reqParamList.length > 1
                        ? `Parameters '${params.join(", ")}' can't be empty`
                        : `Parameter '${params}' can't be empty`,
            },
        });
    next();
};

module.exports = { requireParams };
