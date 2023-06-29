import * as yup from 'yup';

export const MessageSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
    subject: yup.string()
})
