import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.jpeg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

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
    height: 80px;
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
    width: 100%;
    padding-block: 10px;
    justify-items: center;
   
  }

  
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};
`
export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 1rem;
  /* appearance: none; */

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.COLORS.RED_900};
`;