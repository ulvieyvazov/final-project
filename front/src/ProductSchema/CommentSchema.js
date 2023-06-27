import * as yup from 'yup';

export const CommentSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    comment: yup.string().required()
})
