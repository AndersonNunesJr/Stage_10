import { FiPlus } from "react-icons/fi";

import { Container, PlusButton } from "./styles";
import { Section, Header, Note } from "../../components";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const refTimer = useRef(null);

  const navigate = useNavigate();

  const handleSearch = (search) => {
    if (refTimer.current) {
      clearTimeout(refTimer.current);
    }

    refTimer.current = setTimeout(() => {
      setSearchTerm(search);
    }, 500);
  };

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${searchTerm}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [searchTerm, user.id]);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <div className="title">
        <h2>Meus Filmes</h2>
        <PlusButton to="/new">
          <FiPlus />
          Adicionar filme
        </PlusButton>
      </div>
      <Section>
        {notes.map((note) => (
          <Note
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
          />
        ))}
      </Section>
    </Container>
  );
}
