import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #3f4b58;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    letter-spacing: 2px;
    font-size: 1.5rem;
    color: #ffff;
    font-weight: 800;
    margin-bottom: 5px;
  }
  span {
    color: crimson;
  }

  h3 {
    font-weight: 600;
    letter-spacing: 2.5px;
    margin-bottom: 5px;
  }
  i {
    margin: 5px;
    cursor: pointer;
    color: #ececec;
    transition: 1s ease filter;
    :hover {
      color: #ffff;
    }
  }

  hr {
    width: 90%;
    border: 0.1px solid #ffff;
    background-color: #ffff;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  p {
    color: #ffff;
    font-size: 0.5rem;
  }
`;
