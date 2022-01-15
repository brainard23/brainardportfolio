import React from "react";
import styled from "styled-components";

const Button = ({ className, children }) => {
  return <Btn className={className}>{children}</Btn>;
};

export const Btn = styled.button`
  width: 300px;
  height: 60px;
  border: solid 1px white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: crimson;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 3px;
  text-decoration: none;
  a {
    text-decoration: none;
  }
  :hover {
    background-color: #c9000b;
    transition: all 0.1s ease-in-out;
    border-radius: 20px;
    color: #ffff;
    font-weight: 600;
    cursor: pointer;
  }
  @media screen and (max-width: 419px) {
      width: 100%;
    }
`;

export default Button;
