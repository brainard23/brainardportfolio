import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 800px;
  margin: 0 auto;

  h1 {
    font-size: 7rem;
    letter-spacing: 20px;
  }
  span {
    color: crimson;
  }
  @media screen and (max-width: 768px) {
   height: 1200px;
   margin: 0 auto;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 80px;
  margin-top: 20px;
  height: 120px;
  h2 {
    color: black;
    font-size: 2rem;
  }
  img {
    width: 60px;
    height: 60px;
  }
  p {
    font-size: 1.5rem;
  }
 

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 400px;
    margin: 0 auto;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const PhoneCard = styled.div`
  width: 250px;
  border-radius: 10px;
  box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin-left: 15px;
  }
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

export const SocialMediaCard = styled.div`
  width: 250px;
  border-radius: 10px;
  box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin-left: 15px;
  }
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

export const EmailCard = styled.div`
  width: 250px;
  border-radius: 10px;
  box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 2px 28px 11px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin-left: 15px;
  }
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;
