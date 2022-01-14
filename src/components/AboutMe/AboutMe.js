import React from "react";
import { Wrapper, RightColumn, LeftColumn } from "./AboutMe.Styles";
import AboutMeImage from "../../images/AboutMe.jpg";
import Button from "../Button";
import resume from "../../images/Brainard Resume.pdf";
const AboutMe = () => {
  return (
    <section id="about">
      <Wrapper>
        <RightColumn />
        <LeftColumn>
          <h1>
            ABOUT <span>ME</span>
          </h1>
          <div>
            <h3>Web Developer</h3>
            <p>
              My name is Brainard Ordoña, a Web Developer. I am skilled in front
              end web development. I have great skills in HTML, CSS, Javascript,
              Wordpress and React Js. I was a virtual assistant for 2 years and
              a Customer Representative for 1 year.As a VA I managed multiple
              Shopify and Wordpress store. I handled customer service, managing
              products, and creating pages.
            </p>
            <br />
            <p>
              {" "}
              I decided to shift my career as a Web Developer because my dream
              was to become a developer. I am an undergrad in BSIT but this will
              not stop me to pursue my dream to be a developer. I used every
              resources to learn the fundamentals in front end development like
              google, youtube, udemey and etc. I am confident that I am ready to
              be part of a company/team and be a great employee/teammate.
            </p>
          </div>
          
            <a download href={resume}><Button>DOWNLOAD RESUME </Button></a>
         
        </LeftColumn>
      </Wrapper>
    </section>
  );
};

export default AboutMe;
