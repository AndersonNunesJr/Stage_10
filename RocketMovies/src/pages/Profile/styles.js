import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 150px 90px auto;
  grid-template-areas:
    "header"
    "form";

  header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 0 100px;
    background-color: ${({ theme }) => theme.COLORS.PINK + "13"};

    a {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Form = styled.form`
  width: 340px;
  min-height: 525px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div:nth-child(4) {
    margin-top: 24px;
  }
  > button {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
