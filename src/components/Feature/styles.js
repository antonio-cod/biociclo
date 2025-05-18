import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 200px;
  height: 200px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 7px;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  

  > svg {
    flex: 1;
    color: ${({ theme }) => theme.COLORS.GREEN_900};
  }

  > footer {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    width: 100%;
    padding: 24px 0;
    text-align: center;
    font-weight: 700;
  }
`;