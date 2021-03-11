import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <div className="about">
                <Jumbotron className="container text-center">
                    <h1>Contact Us</h1>
                    <h4>International Football Club</h4>
                    <p><i>8301 Keele St.</i></p>
                    <p><i>Vaughan, ON L4K 1Z6</i></p>
                    <p><i>905-760-1666</i></p>
                    <p><i>info@intlfc.com</i></p>
                </Jumbotron>
            </div>
        </>
    );
};

export default Contact;