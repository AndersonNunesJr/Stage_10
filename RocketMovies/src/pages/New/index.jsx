import { FiArrowLeft } from "react-icons/fi";
import {
  Header,
  Section,
  Input,
  Textarea,
  Noteitem,
  ButtonText,
  Nav,
} from "../../components";
import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <Nav icon={FiArrowLeft} title="voltar" />
      <Section>
        <Form>
          <h2>Novo Filme</h2>
          <div className="appointment">
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>
          <Textarea placeholder="Observações" />
          <h3>Marcadores</h3>
          <div className="tags">
            <Noteitem value="react" />
            <Noteitem isNew placeholder="Nova tag" />
          </div>
          <footer>
            <ButtonText title="Excluir" action="button-delete" />
            <ButtonText title="Salvar" action="button-add" />
          </footer>
        </Form>
      </Section>
    </Container>
  );
}
