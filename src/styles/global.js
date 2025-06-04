import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 12px;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
      font-size: 8px;
    }
   }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
     
    color: ${({ theme }) => theme.COLORS.WHITE_900};
    
    -webkit-font-smoothing: antialiased;

    
  }

  body, input, button, textarea, span {
    font-family: "Roboto", serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }
`