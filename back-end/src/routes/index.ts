import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import chatGroupController from "../controllers/GroupController.js";
const router = Router();
//Auth Routes
router.post("/auth/login", AuthController.login);
// Chatgroup route
router.get("/chat-group", AuthMiddleware, chatGroupController.index);
router.get("/chat-group/:id", AuthMiddleware, chatGroupController.show);
router.post("/chat-group", AuthMiddleware, chatGroupController.store);
router.put("/chat-group/:id", AuthMiddleware, chatGroupController.update);
router.delete("/chat-group/:id", AuthMiddleware, chatGroupController.destroy);
export default router;
