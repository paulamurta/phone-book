import { Router } from "express";
import {
  createContactController,
  deleteContactsController,
  getContactsController,
  updateContactController,
} from "../controllers/contact.controller";

const router = Router();

router.post("/contacts", createContactController);
router.get("/contacts", getContactsController);
router.delete("/contacts/:id", deleteContactsController);
router.put("/contacts/:id", updateContactController);

export default router;
