const yup = require("yup");

const aircraftSchema = yup.object({
    client_id: yup.string().required("Required"),
    aircraft_reg: yup.string().required("Required"),
    aircraft_type: yup.string().required("Required"),
});

module.exports = { aircraftSchema };
