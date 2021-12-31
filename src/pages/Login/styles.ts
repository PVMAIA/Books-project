import styled from 'styled-components';

import HomeBackgroundImage from '../../assets/HomeBackgroundImage.png';

export const Container = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   height: 100vh;
   width: 100vw;
   background: url(${HomeBackgroundImage});
   background-size: 100% 100%;
   background-repeat: no-repeat;
`;

export const Content = styled.div`
   margin-left: 115px;
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
   color: #fff;
   font-weight: 300;
   font-family: 'Heebo', sans-serif;
`;

export const ContainerForm = styled.div``;

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
`;
