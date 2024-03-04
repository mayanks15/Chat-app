import express from "express";
import {signUpUser, logInUser,logOutUser} from "../controllers/auth_controller.js";
const router= express.Router();

router.post("/login",logInUser)
router.post("/signup",signUpUser)
router.post("/logout",logOutUser)

export default router;