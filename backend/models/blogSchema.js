import Joi from "joi";
import { Schema, model } from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: false,
        },
    },
    { timestamps: true }
);

export const Blogs = model("blog", blogSchema);
export const validateBlog = (body) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        desc: Joi.string().required(),
        userId: Joi.string().required(),
    });
    return schema.validate(body);
};
