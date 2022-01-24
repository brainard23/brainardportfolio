import React from "react";
import {
  Wrapper,
  Cards,
  PhoneCard,
  SocialMediaCard,
} from "./ContactInfo.Styles";
import phone from "../../images/phone.png";
import fb from "../../images/fb.png";
import git from "../../images/git.png";
import ContactMe from "../ContactMe/ContactMe";

const ContactInfo = () => {
  return (
    <section id="contact">
      <Wrapper>
        <h1>
          Contact <span>Info</span>
        </h1>
        <Cards>
          <PhoneCard>
            <img src={phone} alt="" />
            <div>
              <h2>Phone</h2>
              <p>#09166543866</p>
            </div>
          </PhoneCard>
          <SocialMediaCard>
            <img src={git} alt="" />
            <div>
              <h2>Github</h2>
              <p>
                Brainard Ordoña <br />
                <a href="https://github.com/brainard23">Github Profile</a>
              </p>
            </div>
          </SocialMediaCard>
          <SocialMediaCard>
            <img src={fb} alt="" />
            <div>
              <h2>Facebook</h2>
              <p>
                Brainard Ordoña <br />
                <a href="https://www.facebook.com/brainard.o.s">Profile</a>
              </p>
            </div>
          </SocialMediaCard>
        </Cards>
        <ContactMe />
      </Wrapper>
    </section>
  );
};

export default ContactInfo;
