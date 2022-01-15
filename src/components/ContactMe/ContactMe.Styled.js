import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 450px;
  width: 80%;
  margin: 30px auto;
  border-radius: 10px;
  border: 2px solid gray;
  background-color: #3f4b58;
  color: #000000;
  text-align: left;
  h1 {
    letter-spacing: 10px;
    font-size: 3rem;
    color: #ffff;
    font-weight: 800;
    margin-bottom: 10px;
  }
  span {
    color: crimson;
  }
  form {
    background-color: #ffff;
    width: 100%;
    height: 350px;
    padding: 0 30px;
    display: flex;
  }

  @media screen and (max-width: 768px) {
    form {
      height: 280px;
    }
    h1 {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 419px) {
      h1 {
        font-size: 3.5rem;
        text-align: center;
        margin: 0;
      }
      form {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
         label {
           font-size: 1rem;
         }
      }
    }
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px 20px;
  label {
    margin: 10px 0;
    font-weight: 600;
    font-size: 2rem;
  }

  input {
    width: 80%;
    border-radius: 25px;
    height: 30px;
    padding: 8px;
    font-weight: 600;
  }
  button {
    margin-top: 40px;
    height: 50px;
    width: 80%;
    font-size: 15px;
  }
  @media screen and (max-width: 419px) {
    width: 100%;
    padding: 10px;
    input {
      height: 22px;
    }
    button {
    margin-top: 10px;
    height: 20px;
    width: 80%;
    font-size: 1rem;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-top: 20px;
  padding-right: 50px;
  label {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 2rem;
  }
  textarea {
    height: 80%;
    padding: 5px;
  }
  @media screen and (max-width: 419px) {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 10px;
  }
`;
