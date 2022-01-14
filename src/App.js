import React from "react";

//Components
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import { PortfolioInfo } from "./components/Portfolio/PortfolioInfo";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Footer from "./components/Footer/Footer";

//Styles
import { GlobalStyles } from "./GlobalStyles";

const links = [
  {
    id: 1,
    text: "HOME",
    url: "#home",
  },
  {
    id: 2,
    text: "SKILLS",
    url: "#skills",
  },
  {
    id: 3,
    text: "PORTFOLIO",
    url: "#portolio",
  },
  {
    id: 4,
    text: "ABOUT",
    url: "#about",
  },
  {
    id: 5,
    text: "CONTACT",
    url: "#contact",
  },
];

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar links={links} />
      <Hero />
      <Services />
      <Portfolio slides={PortfolioInfo} />
      <AboutMe />
      <ContactInfo/>
      <Footer />
    </>
  );
}

export default App;
