import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .body {
    display: flex;
    flex: 1;
  }
`;

export const Sidebar = styled.nav`
  width: 220px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600}; /* tom leve de verde */
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;
  border-right: solid 2px #afacac;
  
`;

export const MenuButton = styled.button`
  background: ${({ active }) => (active ? "#f7f7f7" : "transparent")};
  border: solid 2px #f7f7f7;
  padding: 1rem;
  text-align: left;
  font-size: 1.1rem;
  color: #2f4f4f;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  overflow-y: auto;
`;

export const ItemsPanel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeatureGrid = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;
