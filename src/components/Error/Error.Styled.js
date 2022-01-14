import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  background-color: #ffff;
  @media screen and (min-width: 768px) {
      left: calc(50% - 20rem);
      width: 40rem;
  }
`;

export const Header = styled.div`
  background: #3F4B58;
  padding: 1rem;
  h2 {
    margin: 0;
    color: white;
  }
`;
export const Content = styled.div`
  padding: 1rem;
`;
export const Action = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  button {
      width: 100px;
      height: 25px;
      background-color: #DC143C;
      font-weight: 600;
      cursor: pointer; 
      :hover {
    background-color: #c9000b;
    transition: all 0.1s ease-in-out;
    border-radius: 20px;
    color: #ffff;
    font-weight: 600;
    cursor: pointer;
  }
  
`;
