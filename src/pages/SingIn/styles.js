import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
   background: linear-gradient(135deg, #e0f2f1, #a5d6a7); 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  flex: 1;
  /* background-color: ${({ theme }) => theme.COLORS.GRAY_100}; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 250px;
    height: 250px;
    border-radius: 10px;

  }
  
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 2rem;
`;

export const Form = styled.form`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const LogoWrapper = styled.div`
  text-align: center;

  h1 {
    font-size: 2.2rem;
    color: #2e7d32;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-top: -0.6rem;
`;

export const WithButton = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    font-size: 0.9rem;
    color: #388e3c;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #2e7d32;
      text-decoration: underline;
    }
  }
`;
