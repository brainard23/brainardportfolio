import React from 'react'
import {Wrapper, Skills, Programming, Content} from '../Services/Services.Styles';
//images
import react from '../../images/react.png';
import javascript from '../../images/javascript.png';
import wordpress from '../../images/wordpress.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import php from '../../images/php.png';
import bootstrap from '../../images/bootstrap.png';
const Services = () => {
    return (
        <section id="skills">
        <Wrapper>
            <Skills>
                <Content>
                    <h1>SKI<span>L</span>LS</h1>
                    <p>In 2020 I decided to shift my carrer as a Web Developer. I studied on how to be a web developer and was in love in coding. These are the programming language I studied and my personal work as I take my journey to be a web developer. </p>
                </Content>
                <Programming>
                        <div><img src={react} alt=""/></div>
                        <div><img src={javascript} alt=""/></div>
                        <div><img src={wordpress} alt=""/></div>
                        <div><img src={html} alt=""/></div>
                        <div><img src={css} alt=""/></div>
                        <div><img src={php} alt=""/></div>
                        <div><img src={bootstrap} alt=""/></div>
                </Programming>
            </Skills>
        </Wrapper>
        </section>
    )
}

export default Services;
