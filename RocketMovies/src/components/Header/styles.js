import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 100px;
  align-items: center;
  gap: 64px;
  border-bottom: ${({ theme }) => theme.COLORS.BACKGROUND_700} 1px solid;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: ${({ theme }) => theme.COLORS.BACKGROUND_700} 1px solid;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: max-content;
    margin-right: 9px;
  }
  strong {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  a {
    color: ${({ theme }) => theme.COLORS.SILVER_MEDIUM};
  }
`;
