import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const NotFound = () => {
    return (
        <>
            <div className="about">
                <Jumbotron className="container">
                    <h1 className="text-center">404 Not Found !</h1>
                </Jumbotron>
            </div>
        </>
    );
};

export default NotFound;