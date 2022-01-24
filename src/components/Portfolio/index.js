import React, { useState } from "react";
import {
  Wrapper,
  LeftArrow,
  RightArrow,
  Images,
  Projects,
  Header,
  Link,
  Content,
  LinkWrapper,
} from "../Portfolio/Portfolio.Styles";
import { PortfolioInfo } from "./PortfolioInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlides = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlides = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section id="portolio">
      <Header>
        <h1>
          PORT<span>F</span>OLIO
        </h1>
      </Header>
      <Wrapper>
        <LeftArrow>
          <FontAwesomeIcon icon={faAngleLeft} onClick={prevSlides} />{" "}
        </LeftArrow>
        <RightArrow>
          <FontAwesomeIcon icon={faAngleRight} onClick={nextSlides} />{" "}
        </RightArrow>
        {PortfolioInfo.map((slider, index) => {
          return (
            <Images key={index}>
              {index === currentSlide && (
                <Projects>
                  <img src={slider.images} alt="images" />
                  <Content>
                    <h1>{slider.title}</h1>
                    <p>Technology used: {slider.used.join(", ")}</p>
                    <LinkWrapper>
                      {slider.link.length === 0 ? (
                        ""
                      ) : (
                        <Link>
                          <a
                            href={slider.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon icon={faLink} /> PROJECT
                          </a>
                        </Link>
                      )}
                      {slider.git.length === 0 ? '' :  <Link>
                        <a href={slider.git} target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faGithub} /> GITHUB
                        </a>
                      </Link> }
                    </LinkWrapper>
                  </Content>
                </Projects>
              )}
            </Images>
          );
        })}
      </Wrapper>
    </section>
  );
};

export default Portfolio;
