import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK + "13"};

  border: none;
  border-radius: 10px;

  padding: 15px;
  margin-bottom: 10px;

  .homeTag {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  > h1 {
    margin-bottom: 10px;
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    text-align: justify;
    width: 100%;
    margin-top: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 10px;
  }
`;
export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  color: ${({ theme }) => theme.COLORS.PINK};

  svg:nth-child(-n + 4) {
    width: 10px;
    height: 10px;
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
`;
