import { FiLock, FiUser, FiUserCheck } from 'react-icons/fi'
import { BiBuildings } from "react-icons/bi";

import { useNavigate} from "react-router-dom";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'
import { useState } from 'react'

import { useAuth }from "../../hooks/auth";
import { api } from "../../services/api";
import { toast } from 'react-toastify';

export function SignUp() {
  const { signOut } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [enterprise_sector_id, setEnterprise_sector_id] = useState("");

  function handleSingUp() {
    if(!name || !userName || !password || !enterprise_sector_id) {
      return toast.info("Algum campo não foi preenchido");
    }

    api.post("/users", { name, userName, password, enterprise_sector_id})
    .then(() => {
      toast.success("Usuário cadastrado com sucesso");
    }) 
    .catch(error => {
      if (error.response){
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível cadastrar");
      }
    });
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Cadastro de usuários</h1>
        
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="Login"
          type="text"
          icon={FiUserCheck}
          onChange={e => setUserName(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Input
          placeholder="Empresa"
          type="enterprise_sector_id"
          icon={BiBuildings}
          onChange={e => setEnterprise_sector_id(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSingUp}/>
        <Button title="Voltar" onClick={handleSignOut} />

        
      </Form>

    </Container>
  )
}