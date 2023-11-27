import { IContact, IContactCreate } from "../interfaces/contact";

class ContactRepository {
  private contacts: Array<IContact> = [];

  create(contact: IContactCreate): Promise<IContact> {
    return new Promise((resolve, reject) => {
      const newContact: IContact = {
        ...contact,
        id: new Date().getTime(),
      };

      this.contacts.push(newContact);

      resolve(newContact);
    });
  }

  findByPhone(phone: string): Promise<IContact | undefined> {
    return new Promise((resolve, reject) => {
      const foundContact = this.contacts.find(
        (contact) => contact.phone == phone
      );
      resolve(foundContact);
    });
  }
}

export default new ContactRepository();
