import { FiLock } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Form,
  Title,
  Subtitle,
  LogoWrapper,
  WithButton,
  Wrapper,
  Footer,
} from './styles';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Wrapper>
        <Form>
          <LogoWrapper>
            <h1>🌿 Bio Verde</h1>
          </LogoWrapper>

          <Title>Bem-vindo de volta</Title>
          <Subtitle>Acessar a plataforma</Subtitle>

          <Input
            placeholder="E-mail"
            type="text"
            icon={FaRegUser}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />

          <WithButton>
            <Button title="Entrar" onClick={handleSignIn} />
          </WithButton>

          <Footer>
            <a href="#">Esqueci minha senha</a>
          </Footer>
        </Form>
      </Wrapper>
    </Container>
  );
}
