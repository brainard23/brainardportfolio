import styled from "styled-components";
import hero from '../../images/hero.jpg';

export const Wrapper = styled.div`
  background-image: url(${hero});
  height: 100vh;
  width: 100%;
  top: 0;
  background-position: top center;
  background-size: cover;
  z-index: -11;
`;

export const Overlay = styled.div`
  background: rgba(0,0,0,.4);
  width: 100%;
  height: 100vh;
  top: 0;
  position: absolute;
`;


export const Content = styled.div`
    margin: 15% 40% 20% 10%;
    z-index: 1000;
    a {
       text-decoration: none;
     }
    h1{
        color: #fff;
        font-size: 7rem;
    }
     p{
       color: #ffff;
      display: flex;
      height: 50px;
      width: 100%;
      justify-content: left;
      align-items: center;
      font-size: 3rem;
      margin: 20px 0 20px 0;
      left: 0;
      animation: p 5s forwards;
     }
      @keyframes p { 
    
        0%{
          opacity: 0;
         
        }
        30% {
          opacity: 0;
        }
        50% {
          opacity: 0;
        }
        80% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

    } 
`;
