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
  .btnDelete {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 36px;
    width: min-content;
  }
  .description {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    max-height: max-content;
    padding: 15px 10px;
    border-radius: 5px;
    overflow-wrap: break-word;
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

  svg:nth-child(-n + ${(props) => props.value}) {
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
