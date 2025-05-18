import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GREEN_300};

    height: 46px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
      opacity: 1;
      
    }
    //RESPONSIVIDADE LOGO TELA LOGIN
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    height: 40px;
    width: 156.47px;
  }
`;