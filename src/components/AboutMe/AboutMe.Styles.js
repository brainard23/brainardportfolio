import styled from "styled-components";
import brainard from "../../images/AboutMe.jpg";
export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 1200px;
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  height: 520px;
  width: 40%;
  align-items: center;
  border: 4px solid #000000;
  display: flex;
  justify-content: center;
  box-shadow: -9px 9px 17px 9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -9px 9px 17px 9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -9px 9px 17px 9px rgba(0, 0, 0, 0.75);
  background: url(${brainard});
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 768px) {
    height: 350px;
    width: 350px;

    img {
      height: 330px;
      width: 330px;
    }
  }
`;

export const LeftColumn = styled.div`
  height: 520px;
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: center;

  h1 {
    font-size: 5rem;
    letter-spacing: 20px;
  }
  span {
    color: crimson;
  }
  h3 {
    color: #424949;
    font-size: 3rem;
    margin: 10px 0 10px 0;
    font-weight: 600;
  }
  p {
    font-size: 1.5rem;
    color: #626567;
    letter-spacing: 0.5px;
  }
  Button {
    margin-top: 20px;
    font-size: 1.5rem;
    width: 300px;
  }
  a {
    text-decoration: none;
    color: #ffff;
    height: 100%;
    width: 100%;
    padding: 22px;
  }

  @media screen and (max-width: 768px) {
    margin: 100px auto 0 auto; 
    width: 90%;
    
    h1 {
      font-size: 5rem;
      margin: 0 auto;
    }
    h3 {
      font-size: 2rem;
    }
    Button {
      width: 100%;
    }
`;
