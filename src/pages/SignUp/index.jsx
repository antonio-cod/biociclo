import { FiLock, FiUser, FiUserCheck } from 'react-icons/fi'

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSingUp() {
    if(!name || !email || !password ) {
      return toast.info("Algum campo não foi preenchido");
    }

    api.post("/users", { name, email, password} )
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
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

    

        <Button title="Cadastrar" onClick={handleSingUp}/>
        <Button title="Voltar" onClick={handleSignOut} />

        
      </Form>

    </Container>
  )
}