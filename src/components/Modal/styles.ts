import styled from 'styled-components';

import { RiCloseFill } from 'react-icons/ri';

export const Container = styled.div`
   display: none;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.6);
   z-index: 9;

   &.show {
      display: block;
   }

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      overflow-y: auto;
   }
`;

export const BodyModal = styled.div`
   position: absolute;
   width: 769px;
   height: 80vh;
   left: 298px;
   top: 66px;
   background: #ffffff;
   box-shadow: 0px 16px 80px rgb(0 0 0 / 32%);
   border-radius: 4px;
   display: grid;
   grid-template-columns: 1fr 1fr;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      display: flex;
      flex-direction: column;
      left: 0;
      width: 90vw;
      height: 958px;
      margin: 0 20px;
   }
`;

export const ContainerBookImage = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin: 24px 24px 0 24px;
      filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3));
   }
`;

export const BookImage = styled.img`
   width: auto;
   max-width: 314px;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      max-width: 290px;
   }
`;

export const Content = styled.div`
   display: grid;
   margin: 12px 30px 12px 0;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      display: flex;
      flex-direction: column;
      margin: 0;
      align-items: center;
   }
`;

export const ContainerHeader = styled.div`
   margin-top: 20px;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin-top: 12px;
      width: 290px;
   }
`;

export const Title = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 20pt;
   line-height: 40px;
   color: #333333;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   line-clamp: 1;
   -webkit-box-orient: vertical;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      font-size: 28pt;
   }
`;

export const Authors = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 9pt;
   line-height: 20px;
   color: #ab2680;
`;

export const InfoContainer = styled.div`
   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 290px;
      margin-top: 30px;
   }
`;

export const InfoTitle = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 12px;
   line-height: 28px;
   text-transform: uppercase;
   color: #333333;
`;

export const InfoContentContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const InfoText = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 12px;
   line-height: 18px;
   color: #333333;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      font-size: 11px;
   }
`;

export const InfoTextValue = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: normal;
   font-size: 12px;
   line-height: 18px;
   color: #999999;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      font-size: 10px;
   }
`;

export const PublishersReviewContainer = styled.div`
   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 290px;
      margin-top: 30px;
      height: 200px;
   }
`;

export const PublishersReviewTitle = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 12px;
   line-height: 28px;
   text-transform: uppercase;
   color: #333333;
`;

export const PublishersReview = styled.p`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: normal;
   font-size: 12px;
   line-height: 18px;
   color: #999999;
   text-align: justify;
   height: 200px;
`;

export const ButtonCloseModal = styled.button`
   position: absolute;
   right: 0;
   width: 38px;
   height: 36px;
   border: 1px solid rgba(51, 51, 51, 0.2);
   outline: none;
   background: #ffffff;
   border-radius: 44px;
   color: #333333;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 12px 12px 0 0;
   transition: 300ms;

   &:hover,
   &:active {
      background: #b22e6f;
      color: #ffffff;
   }

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin: 16px 16px 0 0;

      &:hover,
      &:active {
         background: #ffffff;
         color: #333333;
      }
   }
`;

export const IconClose = styled(RiCloseFill)`
   height: 20px;
   width: 20px;
`;
