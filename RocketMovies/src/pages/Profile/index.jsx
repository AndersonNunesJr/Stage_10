import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles.js";
import { Input, Button, Nav } from "../../components";

export function Profile() {
  return (
    <Container>
      <Nav icon={FiArrowLeft} title="voltar" />
      <Form>
        <Avatar>
          <img
            src="https://github.com/AndersonNunesJr.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha atual" type="password" icon={FiLock} />

        <Input placeholder="Nova atual" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
