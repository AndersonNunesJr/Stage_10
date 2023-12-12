import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Nav({ title, icon: Icon, children }) {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <Container>
      <button className="nav" type="button" onClick={handleBack}>
        {Icon && <Icon size={20} />}
        {title}
      </button>
      {children}
    </Container>
  );
}
