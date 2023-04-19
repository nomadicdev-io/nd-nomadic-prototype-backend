import express from "express";

// Controllers
import { getAllUsers, createUser, getUserInfoByID } from "../controllers/user.controller.js";

// Routers
const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoByID);

export default router;