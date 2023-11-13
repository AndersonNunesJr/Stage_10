import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  padding: 0 100px;
  align-items: center;
  justify-content: space-between;

  .nav {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
