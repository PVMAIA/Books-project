import { FC } from 'react';

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
} from './styles';

const Login: FC = () => {
   return (
      <Container>
         <Content>
            <ContainerHeader>
               <Logo src={LogoWhite} alt="Logo" />
               <Title>Books</Title>
            </ContainerHeader>
            <ContainerForm>
               <Input type="email" label="Email" />
               <Input type="password" label="Senha">
                  <ButtonLogin type="button">Entrar</ButtonLogin>
               </Input>
            </ContainerForm>
         </Content>
      </Container>
   );
};

export default Login;
