import toast from "react-hot-toast";
import ReactDOM from "react-dom";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useState, FormEvent, useEffect } from "react";
import { NewContactModalProps } from "./types";
import { ButtonBox, FormModal, OverlayModal } from "../../../styles/global";
import { ModalConfirm } from "../../../components/Modal/ModalConfirm";
import { WrapperModal } from "../../../components/Modal/ModalConfirm/styles";
import { Header3 } from "../../../styles/typography";
import { ButtonConfirm } from "../../../components/Button/ButtonConfirm";

export function ModalNewContact({ isModalActive, closeModal }: NewContactModalProps) {
  const modalRoot = document.getElementById("modal") as HTMLElement;
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [firstName, setFirstNAme] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const navigate = useNavigate();

  const isFormValid = firstName && lastName && phone;

  function handleCancelModal() {
    setIsModalConfirmOpen(false);
  }

  function handleCloseModal() {
    setFirstNAme("");
    setLastName("");
    setPhone("");
    closeModal();
    navigate("/contacts");
    setIsModalConfirmOpen(false);
  }

  async function onSaveFields() {
    const body = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };

    await api
      .post("users", body)

      .then(async (res) => {
        toast.success("User created successfully!");
        setTimeout(() => {
          setIsModalConfirmOpen(false);
        }, 3000);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSaveFields();
  }

  if (!isModalActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <OverlayModal>
      <ModalConfirm
        isModalActive={isModalConfirmOpen}
        handleCancel={handleCancelModal}
        handleClose={handleCloseModal}
        title="Cancel Create Contact?"
        message="You are leaving Add Contact. Would you like to continue?"
      />
      <WrapperModal>
        <Header3>Add Contact</Header3>
        <FormModal onSubmit={handleSubmit} noValidate autoComplete="off">
          <ButtonBox>
            <ButtonConfirm label={"Save"} type="submit" disabled={!isFormValid} />
            <ButtonConfirm
              label={"Cancel"}
              type="button"
              onClick={() => setIsModalConfirmOpen(true)}
            />
          </ButtonBox>
        </FormModal>
      </WrapperModal>
    </OverlayModal>,
    modalRoot,
  );
}
