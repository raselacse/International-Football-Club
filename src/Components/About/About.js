import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from '../../Photo/logo.png'
import './About.css'

const About = () => {
    return (
        <>
            <div className="about">
                <Jumbotron className="container text-center">
                    <img className="img-fluid" src={logo} alt=""/>
                    <h2>International Football Club</h2>
                    <p><i>Founded: May 22, 1912</i></p>
                    <p><i>Dissolved: 1924</i></p>
                    <p><i>Ground: <a href="*">Baixada do Água Verde</a>, <a href="*">Curitiba</a>, <a href="*">Brazil</a></i></p>
                    <p><i>Capacity: 5,000</i></p>
                </Jumbotron>
            </div>
        </>
    );
};

export default About;