import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border: none;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  font-size: 16px;
`;
