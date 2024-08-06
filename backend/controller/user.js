// import { Blogs } from "../models/blogSchema.js";

import { Users, validateUser } from "../models/userSchema.js";

class UsersController {
    async get(req, res) {
        try {
            const users = await Users.find();
            if (!users.length) {
                return res.status(400).json({
                    msg: "User is not defined",
                    variant: "error",
                    payload: null,
                });
            }
            res.status(200).json({
                msg: "All Users",
                variant: "success",
                payload: users,
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
            const user = await Users.create(req.body);
            res.status(201).json({
                msg: "User is created",
                variant: "success",
                payload: user,
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
