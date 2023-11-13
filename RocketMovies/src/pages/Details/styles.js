import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 100px 90px auto;
  grid-template-areas:
    "header"
    "nav";

  .tags {
    margin-bottom: 25px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;
export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  color: ${({ theme }) => theme.COLORS.PINK};

  svg:nth-child(-n + 4) {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
`;
export const Preface = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;

  > p {
    margin-right: 15px;
  }
  > img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
