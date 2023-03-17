const yup = require("yup");

const quantitySchema = yup.object({
    starting_quantity: yup.number().min(0).required("Required"),
    quantity_received: yup.number().min(0).required("Required"),
    quantity_issued: yup.number().min(0).required("Required"),
    reorder_level: yup.number().min(0).required("Required"),
});

module.exports = { quantitySchema };
