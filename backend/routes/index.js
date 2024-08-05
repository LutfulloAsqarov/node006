import express from "express";
import BlogsController from "../controller/blog.js";
// import UsersController from "../controller/user.js";

const router = express.Router();

router.get("/api/blogs", BlogsController.get);
router.post("/api/blogs", BlogsController.create);

// router.get("/api/users", UsersController.get);
// router.get("/api/users", UsersController.create);

export default router;
