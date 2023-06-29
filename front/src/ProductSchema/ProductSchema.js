import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
    name: yup.string(),
    price: yup.number(),
    img: yup.string(),
    specification: yup.string(),
    engine: yup.string(),
    material: yup.string(),
    detailimg: yup.string(),
    innovation: yup.string(),
    category: yup.string(),
    rating: yup.number(),
    description: yup.string(),
    // fulldisc,productfulldisc: yup.string(),
    availability: yup.string(),
    brand: yup.string(),
    sku: yup.string(),
    // specification: yup.string
})
