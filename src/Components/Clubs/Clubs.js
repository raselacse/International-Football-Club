import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Clubs.css'

const Clubs = (props) => {
    const { idTeam, strTeam, strTeamFanart2 } = props.teams;
    return (
        <>
            <Card className="my-4 text-center teams">
                <Card.Img variant="top" src={strTeamFanart2} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Button
                        as={Link} to={"/club/" + idTeam}
                        variant="primary">Explore
                            <i className="ml-2"><FontAwesomeIcon icon={faArrowRight} /></i>
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Clubs;