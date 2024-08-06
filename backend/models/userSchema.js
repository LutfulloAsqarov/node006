import Joi from "joi";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: false,
        },
        url: {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: false,
        },
        budget: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export const Users = model("user", userSchema);
export const validateUser = (body) => {
    const schema = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        age: Joi.number(),
        url: Joi.string(),
        gender: Joi.string().required(),
        isActive: Joi.boolean(),
        budget: Joi.number().required(),
    });
    return schema.validate(body);
};
