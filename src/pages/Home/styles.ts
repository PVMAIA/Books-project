import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import HomeBackgroundImage from '../../assets/HomeBackgroundImage.png';
import HomeBackgroundImageMobile from '../../assets/HomeBackgroundImageMobile.png';

export const Container = styled.div`
   height: 100vh;
   width: 100vw;
   background: url(${HomeBackgroundImage});
   background-size: 100% 100%;
   background-repeat: no-repeat;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      height: 100%;
      background: url(${HomeBackgroundImageMobile});
      background-size: 100% 100%;
      background-repeat: no-repeat;

      &.noScroll {
         overflow-y: hidden;
      }
   }
`;

export const ContainerHeader = styled.div`
   width: 84vw;
   height: 12vh;
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin: 32px 0;
      width: 100vw;
   }
`;

export const ContainerLogoAndTitle = styled.div`
   display: flex;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin-left: 16px;
   }
`;

export const Logo = styled.img`
   max-height: 37px;
   max-width: 104.4px;
   height: auto;
   width: auto;
`;

export const Title = styled.h5`
   margin: 0 16px;
   font-size: 20pt;
   color: #333333;
   font-weight: 300;
   font-family: 'Heebo', sans-serif;
`;

export const ContainerWelcome = styled.div`
   display: flex;
   align-items: center;
   margin-right: 12px;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin-left: 16px;
   }
`;

export const WelcomeText = styled.h5`
   margin: 0 16px 0 0;
   font-size: 12pt;
   color: #333333;
   font-weight: bold;
   font-family: 'Heebo', sans-serif;
`;

export const ButtonLogout = styled.button`
   width: 38px;
   height: 36px;
   border: 1px solid rgba(51, 51, 51, 0.2);
   outline: none;
   background: transparent;
   border-radius: 44px;
   color: #333333;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: 300ms;

   &:hover,
   &:active {
      background: #b22e6f;
      color: #ffffff;
   }

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      &:hover,
      &:active {
         background: transparent;
         color: #333333;
      }
   }
`;

export const IconLogout = styled(FiLogOut)`
   height: 20px;
   width: 20px;
`;

export const ListContainer = styled.div`
   display: grid;
   grid-template-columns: 21vw 21vw 21vw 21vw;
   grid-template-rows: 25vh 25vh 25vh;
   align-items: center;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      display: flex;
      flex-direction: column;
   }
`;

export const PagingButtonsContainer = styled.div`
   display: flex;
   align-items: center;
   width: 82vw;
   justify-content: flex-end;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      justify-content: center;
      width: 100vw;
      margin: 20px;
   }
`;

export const TextPagination = styled.span`
   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: normal;
   font-size: 10pt;
   line-height: 20px;
   margin-right: 16px;

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin: 0 16px;
   }
`;

export const PaginationButton = styled.button`
   width: 38px;
   height: 36px;
   border: 1px solid rgba(51, 51, 51, 0.2);
   outline: none;
   background: transparent;
   border-radius: 44px;
   color: #333333;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: 300ms;

   &:disabled {
      color: rgba(51, 51, 51, 0.4);
   }

   &:hover,
   &:active {
      background: ${({ disabled }) => (disabled ? 'transparent' : '#b22e6f')};
      color: ${({ disabled }) =>
         disabled ? 'rgba(51, 51, 51, 0.4)' : '#ffffff'};
   }

   & + & {
      margin-left: 10px;
   }

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      &:hover,
      &:active {
         background: transparent;
         color: #333333;
      }

      &:disabled {
         color: rgba(51, 51, 51, 0.4);
      }
   }
`;

export const BackPageIcon = styled(RiArrowLeftSLine)`
   height: 20px;
   width: 20px;
`;

export const NextPageIcon = styled(RiArrowRightSLine)`
   height: 20px;
   width: 20px;
`;
