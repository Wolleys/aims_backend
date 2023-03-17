const yup = require("yup");

const priceSchema = yup.object({
    bp_in_usd: yup.number().positive().required("Required"),
    bp_in_local: yup.number().positive().required("Required"),
    sp_in_usd: yup.number().positive().required("Required"),
});

module.exports = { priceSchema };
