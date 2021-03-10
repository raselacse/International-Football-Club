import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Explore from '../Explore/Explore';

const Team = () => {
    const {id} = useParams();
    const [team, setTeam] = useState([])
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
        .then(res => res.json())
        .then(data =>{
            setTeam(data.teams)
            console.log(team)
        })
    },[id])
    return (
        <>
            {
                team.map((team)=> <Explore team={team}></Explore>)
            }
        </>
    );
};

export default Team;