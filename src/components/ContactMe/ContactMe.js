import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Wrapper, RightColumn, LeftColumn } from "./ContactMe.Styled";
import Error from "../Error/Error";
import Button from '../Button/index'

export const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState();
  const form = useRef();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  const sendEmailHandler = (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message:
          "Please enter a valid name, email and message (non-empty values)",
      });
      return;
    }
    if (
      name.trim().length > 0 ||
      email.trim().length > 0 ||
      message.trim().length > 0
    ) {
      setError({
        title: "Message Sent",
        message:
          "Thank you for contacting me, I will get back to you as soon as possible. ",
      });
    }
    emailjs.sendForm(
      "service_9eh9zlc",
      "template_t2tyvy4",
      form.current,
      "user_0ctpA49xZLNnCrpEbMH9E"
    );
    setName("");
    setEmail("");
    setMessage("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Wrapper>
        <h1>
          <span>C</span>ontact <span>M</span>e
        </h1>
        <form ref={form} onSubmit={sendEmailHandler}>
          <LeftColumn>
            <label>Name</label>
            <input
              type="text"
              name="client_name"
              value={name}
              onChange={nameHandler}
            />
            <label>Email</label>
            <input
              type="email"
              name="client_email"
              value={email}
              onChange={emailHandler}
            />
            <Button>
              SEND
            </Button>
          </LeftColumn>
          <RightColumn>
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={messageHandler}
            />
            
          </RightColumn>
        </form>
      </Wrapper>
    </>
  );
};

export default ContactMe;
