import express from 'express';
import {signup,signin, google, signOut} from '../controllers/auth.controller.js'
import { ForgotPassword } from '../controllers/auth.controller.js';
const router=express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post('/google',google);
router.get("/signout",signOut);
router.post("/forgotPassword",ForgotPassword);
export default router;