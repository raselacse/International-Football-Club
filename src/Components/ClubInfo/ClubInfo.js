import React from 'react';
import { Card, Jumbotron } from 'react-bootstrap';
import female from '../../Photo/female.png'
import male from '../../Photo/male.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faMapMarkerAlt, faFlag, faMars } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../Icon/Facebook.png'
import twitter from '../../Icon/Twitter.png'
import youtube from '../../Icon/YouTube.png'
import './ClubInfo.css'

const Explore = (props) => {
    const { strTeam, strTeamBadge, strGender, intFormedYear, strCountry, strStadiumDescription, strTeamBanner } = props.team;
    return (
        <>
            <Card>
                <Card.Img src={strTeamBanner} alt={strTeamBanner} style={{ opacity: ".3" }} />
                <Card.ImgOverlay className="team-badge">
                    <Card.Img variant="top" src={strTeamBadge}/>
                </Card.ImgOverlay>
            </Card>
            <div className="row justify-content-around mx-0" style={{ background: "#151414" }}>
                <Jumbotron className="row w-75 mt-5 text-light align-items-center" style={{ background: "#DD1515" }}>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1>{strTeam}</h1>
                        <p><i className="mr-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></i>Founded Year: {intFormedYear}</p>
                        <p><i className="mr-2"><FontAwesomeIcon icon={faFlag} /></i>Country: {strCountry}</p>
                        <p><i className="mr-2"><FontAwesomeIcon icon={faFutbol} /></i>Sports Type: Football</p>
                        <p><i className="mr-2"><FontAwesomeIcon icon={faMars} /></i>Gender: {strGender}</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        {
                            strGender === "Male" ?
                                <img className="img-fluid rounded" src={male} alt="" /> :
                                <img className="img-fluid rounded" src={female} alt="" />
                        }
                    </div>
                </Jumbotron>
                <div className="w-75">
                    <p className="text-white">{strStadiumDescription}</p>
                    <div className="social-link">
                        <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt={facebook} /></a>
                        <a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt={twitter} /></a>
                        <a href="http://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={youtube} alt={youtube} /></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Explore;