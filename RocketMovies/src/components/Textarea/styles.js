import { styled } from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 190px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 5px;
  }
`;
