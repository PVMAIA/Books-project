import styled, { keyframes } from 'styled-components';

const spin = keyframes`
   from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
   justify-content: center;
   align-items: center;
   z-index: 10000;
   display: none;

   &.active {
      display: flex;
   }

   &::before {
      content: '';
      display: block;
      width: 50px;
      height: 50px;
      border: 3px solid transparent;
      border-top-color: #fff;
      border-radius: 50%;
      animation: 1s ${spin} linear infinite;
   }

   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      position: fixed;
   }
`;

export default Container;
