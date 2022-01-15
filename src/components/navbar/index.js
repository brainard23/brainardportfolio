import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Wrapper, Logo, Hamburger, Link, Sticky, Nav} from "./Navbar.Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMinus } from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    
  };
  const scrollHandler = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    console.log(location);

    window.scrollTo({
      left: 0,
      top: location - 60,
    });
    setToggle(false)
  };
  return (
    <Sticky>
      <Wrapper>
        <Logo>
          <a href="#home"><img src={logo} alt="logo" /></a>
        </Logo>
        <Hamburger onClick={handleToggle}>
          <FontAwesomeIcon icon={toggle ? faMinus : faBars} />
        </Hamburger>
        <Nav toggle={toggle}>
          {props.links.map((link) => (
            <Link href={link.url} key={link.id} onClick={scrollHandler}>
              {link.text}
            </Link>
          ))}
        </Nav>
      </Wrapper>
    </Sticky>
  );
};



export default Navbar;
