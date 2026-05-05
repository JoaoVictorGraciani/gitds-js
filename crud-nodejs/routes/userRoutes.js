import { Router } from "express";
import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

const router = Router();

router.post("/user", createUser)
router.get("/user", getUsers)
router.get("/user/:id", getUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

export default router;
