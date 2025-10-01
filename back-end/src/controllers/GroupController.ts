import type { Request, Response } from "express";
import prisma from "../config/db.config.js";

class chatGroupController {
  static async store(req: Request, res: Response) {
    try {
      const body = req.body;
      const user = req.user;
      await prisma.chatGroup.create({
        data: {
          title: body.title,
          passcode: body.passcode,
          user_id: user!.id,
        },
      });
      return res.json({ message: "Chatgroup created successfully!!" });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  }
}
export default chatGroupController;
