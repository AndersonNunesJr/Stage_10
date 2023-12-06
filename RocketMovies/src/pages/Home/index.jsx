import { FiPlus } from "react-icons/fi";

import { Container, PlusButton } from "./styles";
import { Section, Header, Note } from "../../components";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Home() {
  const { user } = useAuth();
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get(`/tags/${user.id}`);
      setTags(response.data);
    }

    fetchTags();
  }, []);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${user.id}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [searchTerm, user.id]);

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
          <Note key={note.id} data={note} />
        ))}
      </Section>
    </Container>
  );
}
