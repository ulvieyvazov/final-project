import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    discount: yup.number(),
    img: yup.string().required(),
    specification: yup.string().required(),
    engine: yup.string().required(),
    detailimg: yup.string().required(),
    innovation: yup.string(),
    category: yup.string().required(),
    rating: yup.number().required(),
    reviews: yup.number(),
    description: yup.string().required(),
    // fulldisc,productfulldisc: yup.string().required(),
    availability: yup.string().required(),
    brand: yup.string().required(),
    sku: yup.string().required(),
    // specification: yup.string.required()
})
