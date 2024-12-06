import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../prisma";

export const CreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      throw new Error("Email and name are required");
    }

    const isEmailExist = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (isEmailExist) {
      throw new Error("Email already exist");
    }

    await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        name,
      },
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
