import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 100px 60px auto;
  grid-template-areas:
    "header"
    "nav"
    "section";

  .nav {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 0 0 100px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  .appointment {
    display: flex;
    gap: 30px;
    margin: 25px 0;
  }
`;

export const Form = styled.form`
  > h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 10px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    gap: 5px;
    padding: 10px;
    border-radius: 8px;
  }
  > footer {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }
`;
