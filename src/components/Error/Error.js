import React from "react";
import ReactDOM from 'react-dom'
import { Action, Backdrop, Content, Header, Modal } from "./Error.Styled";

const BackdropPortal = (props) => {
    return <Backdrop  onClick={props.onConfirm} />
}
const ModalPortal = (props) => {
    return (
      <Modal>
        <Header>
          <h2>{props.title}</h2>
        </Header>
        <Content>
          <p>{props.message}</p>
        </Content>
        <Action>
          <button onClick={props.onConfirm}>Okay</button>
        </Action>
      </Modal>
    )
}

const Error = (props) => {
  return (
      <>
      {ReactDOM.createPortal(
          <BackdropPortal onConfirm={props.onConfirm} />, document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
          <ModalPortal title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}/>, 
          document.getElementById('modal')
      )}
      </>
  );
};

export default Error;
