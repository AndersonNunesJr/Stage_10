import styled from "styled-components";

export const Container = styled.div`
  margin: 0 100px 30px;
  padding: 15px;
  overflow-y: auto;
  border: solid 1px ${({ theme }) => theme.COLORS.PINK + "13"};
  border-radius: 5px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 5px;
  }
`;
