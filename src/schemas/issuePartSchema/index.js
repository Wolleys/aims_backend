const yup = require("yup");

const issuePartSchema = yup.object({
    date_of_issue: yup.date().required("Required"),
    part_id: yup.string().required("Required"),
    description: yup.string().required("Required"),
    serial_number: yup.string().required("Required"),
    part_status: yup.string().required("Required"),
    quantity_on_hand: yup.number().min(0).required("Required"),
    quantity_issued: yup.number().positive().required("Required"),
    sp_in_usd: yup.number().positive().required("Required"),
    engineer_id: yup.string().required("Required"),
});

module.exports = { issuePartSchema };
