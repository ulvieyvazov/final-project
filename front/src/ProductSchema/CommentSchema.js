import * as yup from 'yup';

export const CommentSchema = yup.object().shape({
    reviewsrating: yup.number().required(),
    reviewsName: yup.string().required(),
    reviewsEmail: yup.string().required(),
    reviewsComment: yup.string().required(),
})
