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
        <Note
          data={{
            title: "Interestellar",
            ranking: "4",
            description:
              "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
      </Section>
    </Container>
  );
}
