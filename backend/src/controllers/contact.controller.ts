import { Request, Response } from "express";
import {
  createContactService,
  deleteContactService,
  getContactsService,
  updateContactService,
} from "../services/contact.service";
import { AppError, handleError } from "../common/app.Error";

export const createContactController = async (req: Request, res: Response) => {
  try {
    const newContact = await createContactService(req.body);
    return res.status(201).json(newContact);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const getContactsController = async (req: Request, res: Response) => {
  try {
    const contacts = await getContactsService();
    return res.json(contacts);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const deleteContactsController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteContactService(id);
    return res.status(200).json({ message: "Contact successfully deleted" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export const updateContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await updateContactService(id, req.body);
    return res.status(204).json({ message: "Contact successfully updated" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
