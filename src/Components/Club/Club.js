import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ClubInfo from '../ClubInfo/ClubInfo';

const Club = () => {
    const { id } = useParams();
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setTeam(data.teams)
            })
    }, [id])
    return (
        <>
            {
                team.map((team) => <ClubInfo key={team.idTeam} team={team}></ClubInfo>)
            }
        </>
    );
};

export default Club;