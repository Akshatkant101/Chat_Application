import type { Request, Response } from "express";

class chatGroupController {
  static async store(req: Request, res: Response) {
    try {
      const body = req.body;
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  }
}
export default chatGroupController;
