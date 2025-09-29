import type { Request, Response } from "express";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

interface LoginPayloadType {
  name: string;
  email: string;
  provider: string;
  oauth_id: string;
  image?: string;
}
class AuthController {
  static async login(request: Request, response: Response) {
    try {
      const body: LoginPayloadType = request.body;
      let findUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });

      if (!findUser) {
        findUser = await prisma.user.create({
          data: body,
        });
      }
      let JWTPayload = {
        name: body.name,
        email: body.email,
        id: findUser.id,
      };
      const token = jwt.sign(JWTPayload, process.env.JWT_SECRET!, {
        expiresIn: "365d",
      });
      return response.json({
        message: "Logged in successfully!",
        user: {
          ...findUser,
          token: `Bearer ${token}`,
        },
      });
    } catch (error) {
      return response.status(500).json({ message: "Something went wrong!" });
    }
  }
}

export default AuthController;
