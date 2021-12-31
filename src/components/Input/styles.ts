import styled from 'styled-components';

export const Container = styled.div`
   width: 368px;
   height: 60px;
   background: rgba(0, 0, 0, 0.32);
   backdrop-filter: blur(2px);
   border-radius: 4px;
   margin-top: 40px;
   display: flex;

   & + & {
      margin-top: 16px;
   }
`;

export const Content = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 10px;
`;

export const Label = styled.label`
   color: #fff;
   font-family: 'Heebo', sans-serif;
   font-size: 10pt;
   opacity: 0.5;
`;

export const InputStyled = styled.input`
   background: transparent;
   outline: 0;
   border: none;
   color: #fff;
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 24px;
`;
