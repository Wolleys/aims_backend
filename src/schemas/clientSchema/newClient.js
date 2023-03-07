const yup = require("yup");
const { phoneRegExp } = require("../regex/phoneRegExp");

const newClient = yup.object({
    company_name: yup.string().required("Required"),
    website: yup.string().url("Invalid URL").nullable(),
    first_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    job_title: yup.string().required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
});

module.exports = { newClient };
