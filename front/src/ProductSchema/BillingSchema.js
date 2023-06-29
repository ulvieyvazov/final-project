import * as yup from 'yup';

export const BillingSchema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string(),
    country: yup.string(),
    address: yup.string().required(),
    city: yup.string().required(),
    phone: yup.number(),
    suite: yup.string(),
    state: yup.string()
})