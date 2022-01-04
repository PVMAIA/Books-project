import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';

import Input from '../../components/Input';

import LogoWhite from '../../assets/LogoWhite.png';

import {
   Container,
   Content,
   ContainerHeader,
   Logo,
   Title,
   ContainerForm,
   ButtonLogin,
   SpanError,
} from './styles';

const Login = () => {
   const navigate = useNavigate();
   const context = useAuth();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async (email: string, password: string) => {
      await context.Login(email, password).then((response) => {
         if (response) {
            navigate('/home');
            window.location.reload();
         }
      });
   };

   return (
      <Container>
         <Content>
            <ContainerHeader>
               <Logo src={LogoWhite} alt="Logo" />
               <Title>Books</Title>
            </ContainerHeader>
            <ContainerForm>
               <Input
                  onChange={(value) => setEmail(value)}
                  onKeyPress={() => handleLogin(email, password)}
                  type="email"
                  label="Email"
               />
               <Input
                  onChange={(value) => setPassword(value)}
                  onKeyPress={() => handleLogin(email, password)}
                  type="password"
                  label="Senha">
                  <ButtonLogin
                     onClick={() => {
                        handleLogin(email, password);
                     }}
                     type="button">
                     Entrar
                  </ButtonLogin>
               </Input>
               <SpanError className={context.errorLogin ? 'visibility' : ''}>
                  {context.errorLogin || 'Email e/ou senha incorretos.'}
               </SpanError>
            </ContainerForm>
         </Content>
      </Container>
   );
};

export default Login;
