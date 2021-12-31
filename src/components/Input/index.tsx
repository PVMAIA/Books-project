import { ReactNode } from 'react';

import { Container, Content, Label, InputStyled } from './styles';

interface Props {
   children?: ReactNode;
   label: string;
   type: string;
   onChange(value: string): void;
}

const Input = ({ label, type, onChange, children }: Props) => {
   return (
      <Container>
         <Content>
            <Label htmlFor={label}>{label}</Label>
            <InputStyled
               onChange={(event) => onChange(event.target.value)}
               id={label}
               type={type}
            />
         </Content>
         {children}
      </Container>
   );
};

export default Input;
