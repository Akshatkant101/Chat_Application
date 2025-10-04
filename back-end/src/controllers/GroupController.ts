import type { Request, Response } from "express";
import prisma from "../config/db.config.js";

class chatGroupController {
  static async index(req: Request, res: Response) {
    try {
      const user = req.user;
      const groups = await prisma.chatGroup.findMany({
        where: {
          user_id: user!.id,
        },
        orderBy: {
          created_at: "desc",
        },
      });
      return res.json({
        message: "Chatgroups fetched successfully!!",
        data: groups,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  }
  static async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const groups = await prisma.chatGroup.findUnique({
        where: {
          id: id,
        },
      });
      return res.json({
        message: "Chatgroup fetched successfully!!",
        data: groups,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  }

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
  static async update(req: Request, res: Response) {
    try {
      const body = req.body;
      const { id } = req.params;
      await prisma.chatGroup.update({
        data: {
          title: body.title,
          passcode: body.passcode,
        },
        where: {
          id: id,
        },
      });
      return res.json({ message: "Chatgroup Updated successfully!!" });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  }
  static async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const groups = await prisma.chatGroup.delete({
        where: {
          id: id,
        },
      });
      return res.json({
        message: "Chatgroup deleted successfully!!",
        data: groups,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  }
}
export default chatGroupController;
