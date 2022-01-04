import styled from 'styled-components';

export const Container = styled.div`
   width: 20vw;
   height: 23vh;
   background: #ffffff;
   border-radius: 4px;
   display: flex;
   box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
   transition: 500ms all;
   cursor: pointer;

   &:hover {
      transform: scale(1.05);
      box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.2);
   }

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 329px;
      height: 160px;

      & + & {
         margin-top: 16px;
      }
   }

   @media only screen and (device-height: 851px) {
      width: 362px;
   }
`;

export const ContainerImage = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 8px;
`;

export const BookImage = styled.img`
   width: auto;
   max-width: 70px;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      max-width: 81px;
      filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
      margin: 6px;
   }
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 10px;
   justify-content: space-around;
`;

export const InfoContainer = styled.div`
   margin-bottom: 6px;
`;

export const Title = styled.h1`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 14px;
   color: #333333;
   margin-bottom: 0;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      font-size: 16px;
   }

   @media only screen and (device-height: 851px) {
      font-size: 16px;
   }
`;

export const Authors = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 10px;
   color: #ab2680;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      font-size: 13px;
   }
`;

export const DescriptionContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const TextDescription = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 10px;
   color: #999999;
`;
