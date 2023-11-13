import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Profile } from "./styles";
import { Input } from "../../components";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input placeholder="Pesquisar pelo título" type="text" />

      <Profile>
        <div>
          <Link to="/profile">
            <strong>Anderson Nunes</strong>
          </Link>
          <Link to="#" onClick={signOut}>
            Sair
          </Link>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/AndersonNunesJr.png"
            alt="Foto do usuário"
          />
        </Link>
      </Profile>
    </Container>
  );
}
