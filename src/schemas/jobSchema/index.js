const yup = require("yup");

const jobSchema = yup.object({
    date_opened: yup.date().required("Required"),
    job_number: yup.string().required("Required"),
    client_id: yup.string().required("Required"),
    aircraft_id: yup.string().required("Required"),
    aircraft_type: yup.string().required("Required"),
});

module.exports = { jobSchema };
