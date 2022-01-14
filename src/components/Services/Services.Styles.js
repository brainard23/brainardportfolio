import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 850px;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 7rem;
    letter-spacing: 20px;
    margin-bottom: 20px;
  }
  span {
    color: crimson;
  }
  p {
    color: #1b1b1b;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 15% 20px 15%;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    h1 {
      padding-top: 20px;
      font-size: 5rem;
    }
    p {
      padding-top: 20px;
      font-size: 1.5rem;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 100%;
`;

export const Programming = styled.div`
  height: 100px;
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 2fr));
  grid-gap: 8rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
    margin: 0 10px 0 10px;
    border: 1px solid white;
    border-radius: 20px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 10.8px 20.4px rgba(0, 0, 0, 0.086),
      0 40px 80px rgba(0, 0, 0, 0.12);
  }
  img {
    width: 8rem;
  }
  @media screen and (max-width: 768px) {
    div {
      width: 80%;
      height: 100px;
    }
    img {
      width: 6rem;
    }
    grid-template-columns: repeat(auto-fill, minmax(100px, 2fr));
    grid-gap: 2rem;
    padding-top: 100px;
  }
`;
