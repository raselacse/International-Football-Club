import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const NotFound = () => {
    return (
        <>
            <div style={{ background: "#151414", height: "100vh"}}>
                <Jumbotron className="container">
                    <h1 className="text-center">404 Not Found !</h1>
                </Jumbotron>
            </div>
        </>
    );
};

export default NotFound;