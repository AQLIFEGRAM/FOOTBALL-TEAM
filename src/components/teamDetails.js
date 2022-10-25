import React, { useEffect} from "react";

import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";


import { removePlayerFromTeam } from "../actions/footballActions";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { AiFillDelete } from "react-icons/ai";


export default function TeamDetails() {
  const updatedTeam = useSelector((state) => {
    return state?.teamsReducer?.teams;
  });
  const dispatch = useDispatch();
  const removePlayer = (teamId, playerId) => {
    console.log("teamId:", teamId, "playerId:", playerId);
    dispatch(removePlayerFromTeam(teamId, playerId));
  };
  useEffect(() => {
    console.log("Upated team", updatedTeam);
  }, [updatedTeam]);

  return (
    <>
      <div
        style={{ marginBottom: "px" }}
        className="shadowcard d-flex flex-wrap backimg"
      >
        {updatedTeam.map((team, index) => {
          return (
            <>
              <Card
                className="card h-100 text-center p-3 m-2 cardimg"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  className="teamimg"
                  src={team.logo}
                  height250px
                />
                <Card.Body className="card-body">
                  <div className=" text-center cardtxt">
                    <Card.Title>{team.name}</Card.Title>
                  </div>
                  

                  <div>
                  {
                    team?.players ?.map((player)=>{
                    return(
                      <>
                      <Card>
                        <img src={player.photo}/>
                        <h5>{player.name}</h5> 
                        TEAM:<h5> {team.name} </h5>
                        <Button variant="primary" onClick={()=>{
                          removePlayer(team,player);
                        }} >remove </Button>
                        </Card> 
                        
                        </>

                    )
                  })
                }
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
