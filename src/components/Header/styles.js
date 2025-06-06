import styled from "styled-components";



export const Container = styled.nav`
  width: 100%;
  
  padding: 20px; /* centraliza horizontalmente + margem inferior */

  display: flex;
  align-items: center;
  justify-content: space-between; /* distribui conteúdo dentro do container */

  border-bottom: solid 2px #afacac;
  > h1 {
    flex: 1;
  }

  > button {
    background-color: transparent;
    border: none;
  }

  > aside {
    display: flex;
    align-items: center;

    &::after {
      content: "";
      height: 24px;
      width: 1px;
      background-color: ${({ theme }) => theme.COLORS.GRAY_600};
      margin: 0 16px;
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`;


export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    > small {
        color: ${({ theme }) => theme.COLORS.GRAY_600};
        font-size: 14px;

        display: flex;
        align-items: center;
        margin-top: 3px;

        > svg {
            margin-right: 5px;
        }
    }
`;