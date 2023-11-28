import ReactDOM from "react-dom";
import { ModalProps } from "./types";
import { AiFillInfoCircle as InfoIcon } from "react-icons/ai";
import { Body2, Header3 } from "../../../styles/typography";
import { Actions, Button, ContainerConfirm, WrapperContent, WrapperModal } from "./styles";
import { useTheme } from "styled-components";
import { OverlayModal } from "../../../styles/global";
// import { useTranslation } from 'react-i18next';

export const ModalConfirm = ({
  isModalActive,
  handleCancel,
  handleClose,
  handleSubmit,
  title,
  message,
  loadingMessage,
  isLoading,
}: ModalProps) => {
  const modalRoot = document.getElementById("modal") as HTMLElement;
  const { colors: theme } = useTheme();

  if (!isModalActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <OverlayModal>
      <ContainerConfirm>
        <WrapperModal>
          <InfoIcon />
          <WrapperContent>
            <div className="text-group">
              {title ? <Header3>{title}</Header3> : <Header3>{"Cancelar Cadastro?"}</Header3>}
              {message ? (
                <Body2>{message}</Body2>
              ) : (
                <Body2>{"Você está cancelando cadastro de novo usuário. Deseja continuar?"}</Body2>
              )}
            </div>
            <Actions>
              <Button
                fontcolor={theme.typography.darkGray}
                hovercolor={theme.background.mediumGray}
                onClick={handleCancel}
              >
                Não
              </Button>
              <Button
                fontcolor={theme.primary.main}
                hovercolor={theme.background.mediumGray}
                onClick={() => (handleSubmit ? handleSubmit() : handleClose())}
              >
                {isLoading ? loadingMessage : "Sim"}
              </Button>
            </Actions>
          </WrapperContent>
        </WrapperModal>
      </ContainerConfirm>
    </OverlayModal>,
    modalRoot,
  );
};
