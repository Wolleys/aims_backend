const yup = require("yup");

const unitSchema = yup.object({
    unit_name: yup.string().required("Required"),
});

module.exports = { unitSchema };
