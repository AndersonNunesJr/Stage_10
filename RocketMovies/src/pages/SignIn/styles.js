import styled from "styled-components";
import backgroundImg from "../../assets/background-movie.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
  }
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 48px;
  }
  > h2 {
    margin-bottom: 48px;
  }
  > a {
    width: fit-content;
    margin: 124px auto 0;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  @media (min-width: 520px) {
    padding: 0 68px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 50%;
`;
