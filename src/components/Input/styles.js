import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  
  margin-bottom: 8px;
  border-radius: 10px;
  

  > input {
    height: 35px;
    width: 100%;
    width: 270px;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.GREEN_300};
    background: transparent;
    border: 2px solid;
    border-radius: 10px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_900} 
    }

      //RESPONSIVE
   @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    width: 100%;
    max-width: 240px;
    height: 40px;
  }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GREEN_300};
    margin: 5px;
  }

 
`