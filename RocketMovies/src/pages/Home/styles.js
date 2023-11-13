import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 100px 90px auto;
  grid-template-areas:
    "header"
    "title"
    "section";

  .title {
    display: flex;
    justify-content: space-around;
    padding: 24px 0px;
    > h2 {
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const PlusButton = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  padding: 10px 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
