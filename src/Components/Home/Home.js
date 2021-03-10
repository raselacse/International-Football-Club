import React, { useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Teams from '../Teams/Teams';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => {
                setTeams(data.teams.slice(0, 18))
            })
    }, [])
    return (
        <>
            <div className="home-jumbotron">
                <h1>International Football Club</h1>
            </div>
            <div className="row justify-content-around mx-0" style={{background:"#0E0A2A"}}>
                {
                    teams.map((team) => <Teams teams={team}></Teams>)
                }
            </div>
        </>
    );
};

export default Home;