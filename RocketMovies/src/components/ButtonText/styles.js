import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 36px;
  border: none;

  border-radius: 10px;

  background-color: ${({ theme, action }) =>
    action === "button-add"
      ? theme.COLORS.PINK
      : action === "button-delete"
      ? theme.COLORS.BLACK
      : theme.COLORS.BACKGROUND_700};

  color: ${({ theme, action }) =>
    action === "button-add"
      ? theme.COLORS.BLACK
      : action === "button-delete"
      ? theme.COLORS.PINK
      : theme.COLORS.WHITE};

  font-size: 16px;
`;
