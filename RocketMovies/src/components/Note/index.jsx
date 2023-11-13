import { FiStar } from "react-icons/fi";
import { Container, Stars } from "./styles";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Stars>
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </Stars>
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag className="homeTag" key={tag.name} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
