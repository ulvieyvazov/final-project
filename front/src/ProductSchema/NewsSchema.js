import * as yup from 'yup';

export const NewsSchema = yup.object().shape({
    img: yup.string().required(),
    info: yup.string().required(),
    date: yup.string().required(),
    title: yup.string().required(),
    disc: yup.string().required(),
})
