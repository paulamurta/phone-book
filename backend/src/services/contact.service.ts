import { AppError } from "../common/app.Error";
import { IContact, IContactCreate } from "../interfaces/contact";
import ContactsRepository from "../repository/contact";

export const createContactService = async (
  contact: IContactCreate
): Promise<IContact> => {
  const foundContact = await ContactsRepository.findByPhone(contact.phone);

  if (foundContact) {
    throw new AppError(400, "Phone number already registered");
  }
  return ContactsRepository.create(contact);
};
