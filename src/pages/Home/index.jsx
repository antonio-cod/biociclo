import { useState } from 'react';
import { FiBarChart, FiTrendingUp, FiTruck, FiUser, FiUserPlus, FiUsers } from 'react-icons/fi';

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container, Sidebar, MenuButton, Content, ItemsPanel, FeatureGrid } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';
import { TfiAgenda } from 'react-icons/tfi';

export function Home() {
  const { user } = useAuth();
  const isAdmin = user.role === USER_ROLE.ADMIN;

  const [activeMenu, setActiveMenu] = useState(null);

  const cadastroItems = [
    { title: "Usuários", icon: FiUserPlus, to: "/register" },
    { title: "Cadastro da Coleta", icon: FiTruck, to: "/cadastro-coleta" },
    { title: "Cadastro do Produtor", icon: FiUsers, to: "/producer" },
  ];

  const relatorioItems = [
    { title: "Relatório de Usuários", icon: FiUser, to: "/reportUsers" },
    { title: "Relatório Cadastro de Produtores", icon: FiBarChart, to: "/reportProdutor" },
    { title: "Relatório Agenda de Coletas", icon: TfiAgenda, to: "/agendaColetas" },
    { title: "Relatório de Coletas", icon: FiTrendingUp, to: "/reportCollections" },
  ];

  const menuItems = {
    cadastros: cadastroItems,
    relatorios: relatorioItems,
  };

  return (
    <Container>
      <Header />

      <div className="body">
        <Sidebar>
          <MenuButton onClick={() => setActiveMenu('cadastros')} active={activeMenu === 'cadastros'}>
            Cadastros
          </MenuButton>
          <MenuButton onClick={() => setActiveMenu('relatorios')} active={activeMenu === 'relatorios'}>
            Relatórios
          </MenuButton>
        </Sidebar>

        <Content>
          {isAdmin && activeMenu && (
            <ItemsPanel>
              <FeatureGrid>
                {menuItems[activeMenu].map((item, index) => (
                  <Feature key={index} title={item.title} icon={item.icon} to={item.to} />
                ))}
              </FeatureGrid>
            </ItemsPanel>
          )}
        </Content>
      </div>
    </Container>
  );
}
