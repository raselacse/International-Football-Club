import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from '../../Photo/logo.png'

const About = () => {
    return (
        <>
            <div style={{ background: "#151414", height: "100vh"}}>
                <Jumbotron className="container w-50 text-center">
                    <img src={logo} alt=""/>
                    <h1>International Football Club</h1>
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