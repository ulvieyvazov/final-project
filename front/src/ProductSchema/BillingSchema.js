import * as yup from 'yup';

export const BillingSchema = yup.object().shape({
    fname: yup.string(),
    lname: yup.string(),
    country: yup.string(),
    address: yup.string(),
    city: yup.string(),
    phone: yup.string(),
    notes: yup.string(),
    suite: yup.string(),
    state: yup.string(),
})