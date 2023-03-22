const yup = require("yup");

const purchaseSchema = yup.object({
    date_of_purchase: yup.date().required("Required"),
    supplier_id: yup.string().required("Required"),
    quantity_received: yup.number().positive().required("Required"),
    part_status: yup.string().required("Required"),
    date_of_production: yup.date().required("Required"),
    shelf_life: yup.number().min(0).required("Required"),
    duration: yup.string().required("Required"),
    bp_in_usd: yup.number().positive().required("Required"),
    bp_in_local: yup.number().positive().required("Required"),
    sp_in_usd: yup.number().positive().required("Required"),
});

module.exports = { purchaseSchema };
