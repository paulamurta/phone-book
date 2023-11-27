export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IContactCreate {
  firstName: string;
  lastName: string;
  phone: string;
}
