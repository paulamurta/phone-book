import { Button } from "./styles";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function EnterButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/contacts")}>
      START A TRIAL
      <FiArrowRight />
    </Button>
  );
}
