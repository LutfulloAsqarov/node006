import { Blogs } from "../models/blogSchema.js";

class UsersController {
    async get(req, res) {
        try {
            const blogs = await Users.find();
            if (!blogs.length) {
                return res.status(400).json({
                    msg: "Blog is not defined",
                    variant: "error",
                    payload: null,
                });
            }
            res.status(200).json({
                msg: "All blogs",
                variant: "success",
                payload: blogs,
            });
        } catch {
            res.status(500).json({
                msg: "Server error",
                variant: "error",
                payload: null,
            });
        }
    }
    async create(req, res) {
        try {
            const { error } = validateUser(req.body);
            if (error) {
                return res.status(400).json({
                    msg: error.details[0].message,
                    variant: "warning",
                    payload: null,
                });
            }
            const blog = await Blogs.create(req.body);
            res.status(201).json({
                msg: "Blog is created",
                variant: "success",
                payload: blog,
            });
        } catch {
            res.status(500).json({
                msg: "Server error",
                variant: "error",
                payload: null,
            });
        }
    }
}

export default new UsersController();
