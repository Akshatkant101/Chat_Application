import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import chatGroupController from "../controllers/GroupController.js";
const router = Router();
//Auth Routes
router.post("/auth/login", AuthController.login);
// Chatgroup route
router.post("/chat-group", AuthMiddleware, chatGroupController.store);
export default router;
