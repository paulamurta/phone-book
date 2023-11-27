import { Router } from "express";
import { createContactController } from "../controllers/contact.controller";

export const router = Router();

router.post("/contacts", createContactController);
