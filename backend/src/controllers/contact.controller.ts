import { Request, Response } from "express";
import { createContactService } from "../services/contact.service";
import { AppError, handleError } from "../common/app.Error";

export const createContactController = async (req: Request, res: Response) => {
  try {
    const newContact = await createContactService(req.body);
    return res.json(newContact);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
