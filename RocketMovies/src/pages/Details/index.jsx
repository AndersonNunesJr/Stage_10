import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi";
import { Container, Title, Stars, Preface } from "./styles";
import { Nav, Header, Section, Tag, ButtonText } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const { user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  async function handleRemove() {
    await api.delete(`/notes/${params.id}`);
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <Nav icon={FiArrowLeft} title="voltar">
        <ButtonText
          onClick={handleRemove}
          title="Excluir"
          action="button-delete"
          className="btnDelete"
        />
      </Nav>
      {data && (
        <Section>
          <Title>
            <h1>{data.title}</h1>
            <Stars value={data.rating}>
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </Stars>
          </Title>
          <Preface>
            <img src={avatarUrl} alt={user.name} />
            <p>Por {user.name}</p>
            <FiClock />
            <time dateTime={data.created_at}>{data.created_at}</time>
          </Preface>
          {data.tags && (
            <div className="tags">
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          )}

          <p className="description">{data.description}</p>
        </Section>
      )}
    </Container>
  );
}
