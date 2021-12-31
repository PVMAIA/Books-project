import { ReactNode } from 'react';

import { Container, Content, Label, InputStyled } from './styles';

interface InputProps {
   children?: ReactNode;
   label: string;
   type: string;
}

const Input = ({ children, label, type }: InputProps) => {
   return (
      <Container>
         <Content>
            <Label htmlFor={label}>{label}</Label>
            <InputStyled id={label} type={type} />
         </Content>
         {children}
      </Container>
   );
};

export default Input;
