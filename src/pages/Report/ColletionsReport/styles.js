import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    
  }
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  

  > h1 {
    width: 100%;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 2rem;
    margin: 4rem 0;
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > button {
    width: 210px;
    padding-block: 10px;
    justify-items: center;
    margin-left: 30px;
  }
`;