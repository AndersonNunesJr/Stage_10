import { FiPlus } from "react-icons/fi";

import { Container, PlusButton } from "./styles";
import { Section, Header, Note } from "../../components";

export function Home() {
  return (
    <Container>
      <Header />
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
