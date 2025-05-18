import { FiUserPlus, FiUser, FiArchive} from 'react-icons/fi';

import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../auth";

import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';
import { Container } from "./styles";


export function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <Header />

      <main>
          {[USER_ROLE.ADMIN].includes(user.role) &&  <Feature title="Users" icon={FiUserPlus} to="/register" />}
          {[USER_ROLE.ADMIN].includes(user.role) && <Feature title="Relatório de Usuários" icon={FiUser} to="/reportUsers" />}
          {[USER_ROLE.ADMIN].includes(user.role) && <Feature title="Relatório de Avaliações" icon={FiArchive} to="/packaginCollectionReport" />}
        
      </main>
    </Container>
  )
}