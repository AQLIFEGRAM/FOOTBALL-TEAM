import React, { useEffect, useState } from "react";




import { TeamList } from "./TeamList";
// import "./styles.css";
// import { AiFillDelete } from "react-icons/ai";

export default function Teams() {
  // const [teamData, setTeamData] = useState();
  // const { teams } = useSelector((state) => {
  //   return state?.teamsReducer;
  // });
  // useEffect(() => {
  //   //console.log("teamsss",teams)
  //   setTeamData(teams);
  // }, [teams]);
  // return (
  //   <>
  //     <div
  //       style={{ marginBottom: "50px" }}
  //       className="shadowcard d-flex flex-wrap"
  //     >
  //       {TeamList?.map((team) => {
  //         return (
  //           <Card
  //             className="card h-100 text-center p-3 m-2"
  //             style={{ width: "18rem" }}
  //           >
  //             <Card.Img
  //               variant="top"
  //               className="teamimg"
  //               src={team.tlogo}
  //               height250px
  //             />
  //             <Card.Body className="card-body">
  //               <div className=" text-center cardtxt">
  //                 <Card.Title>{team.tname}</Card.Title>
  //               </div>
  //             </Card.Body>
  //           </Card>
  //         );
  //       })}
  //     </div>
  //   </>
  // );
  return(

    <>
    {
    TeamList.map((n)=>{
        return(
          <>
          <img src={n.tlogo}/>
          </>
        )
      })
    }
    </>
   
  )
}
