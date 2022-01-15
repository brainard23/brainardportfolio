import React from "react";
import Button from "../Button/index";
import { Wrapper, Content, Overlay } from "../Hero/Hero.Styles";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
const Hero = () => {
  return (
    <section id="home">
      <Wrapper>
        <Overlay>
          <Content>
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello, <br />")
                    .start()
                    .pauseFor(100)
                    .typeString("I am Brainard ");
                }}
              />
            </h1>
            <p>Web Developer</p>
            <a href="#contact">
              <Red>CONTACT ME </Red>
            </a>
          </Content>
        </Overlay>
      </Wrapper>
    </section>
  );
};

export const Red = styled(Button)`
  opacity: 0;
  animation: pop 5s forwards;
 

  @keyframes pop {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    @media screen and (max-width: 419px) {
      width: 40%;
    }
  }
`;
export default Hero;
