import { Container } from "./styles";

export function ButtonText({ title, action, ...rest }) {
  return (
    <Container {...rest} type="button" action={action}>
      {title}
    </Container>
  );
}
