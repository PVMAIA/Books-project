import styled from 'styled-components';

import LoginBackgroundImage from '../../assets/LoginBackgroundImage.png';
import LoginBackgroundImageMobile from '../../assets/LoginBackgroundImageMobile.png';

export const Container = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   height: 100vh;
   width: 100vw;
   background: url(${LoginBackgroundImage});
   background-size: 100% 100%;
   background-repeat: no-repeat;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      background: url(${LoginBackgroundImageMobile});
      background-size: 100% 100%;
      background-repeat: no-repeat;
   }

   @media only screen and (max-device-width: 950px) {
      justify-content: center;
   }
`;

export const Content = styled.div`
   margin-left: 115px;

   @media only screen and (min-device-width: 320px) and (max-device-width: 950px) {
      margin-left: 0;
   }
`;

export const ContainerHeader = styled.div`
   display: flex;
`;

export const Logo = styled.img`
   max-height: 36px;
   max-width: 104.4px;
   height: auto;
   width: auto;
`;

export const Title = styled.h5`
   margin: 0 16px;
   font-size: 22pt;
   color: #ffffff;
   font-weight: 300;
   font-family: 'Heebo', sans-serif;
`;

export const ContainerForm = styled.div`
   position: relative;
`;

export const ButtonLogin = styled.button`
   width: 85px;
   height: 36px;
   border: none;
   outline: none;
   background: #ffffff;
   border-radius: 44px;
   margin: 12px;
   color: #b22e6f;
   font-weight: 700;
   font-size: 13pt;
   font-family: 'Heebo', sans-serif;
   transition: 300ms;

   &:hover,
   &:active {
      background: #b22e6f;
      color: #ffffff;
   }

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      &:hover,
      &:active {
         background: #ffffff;
         color: #b22e6f;
      }
   }
`;

export const SpanError = styled.span`
   width: 239px;
   height: 36px;
   position: absolute;
   text-align: center;
   visibility: hidden;
   background: rgba(255, 255, 255, 0.4);
   backdrop-filter: blur(2px);
   border-radius: 4px;
   color: #fff;
   padding: 5px 10px;

   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 13pt;
   line-height: 34px;

   &::after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 8%;
      margin-left: -8px;
      width: 0;
      height: 0;
      border-bottom: 8px solid rgba(255, 255, 255, 0.4);
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
   }

   &.visibility {
      visibility: visible;
      opacity: 0.9;
      top: 158px;
      left: 0;
      z-index: 999;
   }
`;
