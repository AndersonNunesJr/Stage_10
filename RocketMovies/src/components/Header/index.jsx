import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Profile } from "./styles";
import { Input } from "../../components";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ onSearch }) {
  const [search, setSearch] = useState("");
  const { user, signOut } = useAuth();
  const [notes, setNotes] = useState([]);
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  // useEffect(() => {
  //   async function fetchNotes() {
  //     const response = await api.get(`/notes?title=${search}`);
  //     setNotes(response.data);
  //   }
  //   fetchNotes();
  //   onSearch(search);
  // }, [search, onSearch]);
  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input
        placeholder="Pesquisar pelo título"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <Link to="#" onClick={signOut}>
            Sair
          </Link>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
