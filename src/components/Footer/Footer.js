import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { Wrapper } from './Footer.Styles';

const Footer = () => {
    return (
        <Wrapper>
            <h1><span>B</span>RAINARD <span>O</span>RDOÑA</h1>
            <h3>Web Developer</h3>
            <div>
            <i><FontAwesomeIcon icon={faFacebook} /></i>
            <i><FontAwesomeIcon icon={faInstagram} /></i>
            <i><FontAwesomeIcon icon={faLinkedin} /></i>
            <i><FontAwesomeIcon icon={faTwitter} /></i>
            </div>
            <hr/>
            <p>Copyrights © 2022 Brainard Ordona All Rights Reserved</p>
        </Wrapper>
    )
}

export default Footer
