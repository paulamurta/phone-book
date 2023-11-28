import { AddButton } from "./styles";
import { useNavigate } from "react-router-dom";

export function AddContactButton({ setModalNewContact }: any) {
  return <AddButton onClick={() => setModalNewContact(true)}>+ Add Contact</AddButton>;
}
