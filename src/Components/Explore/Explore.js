import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import female from '../../Photo/female.png'
import male from '../../Photo/male.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faMapMarkerAlt, faFlag, faMars } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../Icon/Facebook.png'
import twitter from '../../Icon/Twitter.png'
import youtube from '../../Icon/YouTube.png'
import './Explore.css'
import { Link } from 'react-router-dom';

const Explore = (props) => {
    const { strTeam, strTeamBadge, strGender, intFormedYear, strCountry, strStadiumDescription } = props.team;
    return (
        <>
            <div className="home-jumbotron d-flex justify-content-center align-items-center">
                <img className="img-fluid w-25 rounded" src={strTeamBadge} alt="" />
            </div>
            <div className="row justify-content-around mx-0" style={{ background: "#0E0A2A" }}>
                <Jumbotron className="row w-75">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1>{strTeam}</h1>
                        <p><i><FontAwesomeIcon icon={faMapMarkerAlt}/></i>Founded Year: {intFormedYear}</p>
                        <p><i><FontAwesomeIcon icon={faFlag}/></i>Country: {strCountry}</p>
                        <p><i><FontAwesomeIcon icon={faFutbol}/></i>Sports Type: Football</p>
                        <p><i><FontAwesomeIcon icon={faMars}/></i>Gender: {strGender}</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        {
                            strGender === "Male"?
                            <img className="img-fluid rounded" src={male} alt="" />:
                            <img className="img-fluid rounded" src={female} alt="" />
                        }
                    </div>
                </Jumbotron>
                <div className="w-75">
                    <p className="text-white">{strStadiumDescription}</p>
                    <div className="social-link">
                        <a href="http://www.facebook.com" target="_blank"><img src={facebook} alt={facebook}/></a>
                        <a href="http://www.twitter.com" target="_blank"><img src={twitter} alt={twitter}/></a>
                        <a href="http://www.youtube.com" target="_blank"><img src={youtube} alt={youtube}/></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Explore;