import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Nav({ title, icon: Icon, children }) {
  return (
    <Container>
      <Link to="/" className="nav">
        {Icon && <Icon size={20} />}
        {title}
      </Link>
      {children}
    </Container>
  );
}
