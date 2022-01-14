import styled from "styled-components";

export const Sticky = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
`;
export const Wrapper = styled.div`
    display: flex;
    background: rgba(0, 0, 0, .8);
    z-index: 1;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
    height: 60px;
    padding: 0.5rem calc((100vw - 1200px) / 2); /* puts the content in the middle con*/
`;
export const Logo = styled.div`
    margin-left: 30px;
    img {
        height: 100px;
    }
  
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  max-width: 1300px;

  h1 {
    display: none;
  }
  @media screen and (max-width: 768px) {
    background-color: black;
    display: flex;
    position: absolute;
    top: 0;
    top: ${({ toggle }) => (toggle ? "0" : "-1000px")};
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-content: center;
    padding: 80px;
    transition: top 0.5s ease-in;
    cursor: pointer;
  }
`;
export const Link = styled.a`
display: flex;
flex-direction: center;
padding: 0 10px 0 10px;
cursor: pointer;
text-decoration: none;
color: #ffff;
font-size: 1.8rem;
 :hover {
     color: crimson;
 }
 @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    :hover {
        background-color: red;
        color: #fff;
    }
}
`

export const Hamburger = styled.div`
 display: none;
 z-index: 100;
 color: #ffff;
 
 @media screen and (max-width: 768px) {
     display: flex;
     position: absolute;
     top: 10px;
     z-index: 100;
     right: 30px;
     transfrom: translate(-100%, 75%);
     font-size: 3rem;
     cursor: pointer;
     
 }
`;


