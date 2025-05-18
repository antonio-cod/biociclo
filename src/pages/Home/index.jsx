import { FiArchive, FiUser, FiUserPlus,  } from 'react-icons/fi';

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';


export function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <Header />

      <main>
          {[USER_ROLE.ADMIN].includes(user.role) &&  <Feature title="Users" icon={FiUserPlus} to="/register" />}
          {[USER_ROLE.ADMIN].includes(user.role) && <Feature title="Relatório de Usuários" icon={FiUser} to="/reportUsers" />}
          {[USER_ROLE.ADMIN].includes(user.role) && <Feature title="Relatório de Coletas" icon={FiArchive} to="/reportCollections" />}
      </main>
    </Container>
  )
}