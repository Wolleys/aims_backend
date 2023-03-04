const yup = require("yup");

const physicalAddress = yup.object({
  address_line_1: yup.string().required("Required"),
  address_line_2: yup.string().nullable(),
  city: yup.string().required("Required"),
  region: yup.string().nullable(),
  postal_code: yup.string().required("Required"),
  country: yup.string().required("Required"),
});

module.exports = { physicalAddress };
