import { actionTypes } from "../actions/actionTypes";

const { ADD_TEAM, ADD_PLAYER_TO_TEAM, REMOVE_PLAYER_FROM_TEAM } = actionTypes;
const initialState = {
  teams: [
    
    {
      id:1,
      logo:"https://lh3.googleusercontent.com/OQZi4ckWAs7UrOlZEPefXZgJOcdJuSM5FSH9zqD5rMg6c2MOaxcKpV5IMrb1Tju98fWyNmcI33E4RGb0uC09Ej4W",
      name:"FC Barcelona",
      players:[]
      
  },
  {
      id:2,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
      name:"Real Madrid CF",
      players:[]
      
  },
  {
      id:3,
      logo:"https://lh3.googleusercontent.com/dtFuCbfBxODq263Ramrmu-7jXxjsdL2YdyXA243PtwLr2U5xOAaUi63FwSgDRKuNTXCyPEyghjW-D2EVlfjnp4HU",
      name:"Paris Saint-Germain F.C.",
      players:[]
      
  },
  {
      id:4,
      logo:"https://lh3.googleusercontent.com/KNyKMfQqqVcLYAROYJ6KPW7nqmyMMcuc7npdzuzYI9KXhnZDJ3Wkfqy_apcQTDgq2QlNp9LzqQly06N5qsNxUOLT",
      name:"Manchester United F.C.",
      players:[]
      
  },
  {
      id:5,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
      name:"Manchester City F.C.",
      players:[]
      
  },
  {
      id:6,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
      name:"Liverpool F.C.",
      players:[]
      
  },
  {
      id:7,
      logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
      name:"FC Bayern Munich",
      players:[]
      
  },
  {
      id:8,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
      name:"Chelsea F.C.",
      players:[]
      
  },
  {
      id:9,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
      name:"Arsenal F.C.",
      players:[]
      
  }, 
  ],
  playerList: [
   
    {
    id:1,
photo:"https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1357x278:1359x276)/origin-imgresizer.eurosport.com/2022/09/24/3459418-70573528-2560-1440.jpg",
name:"Lionel Messi",
position:"Forward",
available: true,
},
{
    id:2,
    photo:"https://imageio.forbes.com/specials-images/imageserve/627bd291633f3fbbcda36428/0x0.jpg?format=jpg&crop=2057,2059,x918,y85,safe&height=416&width=416&fit=bounds.com/?uuid=7b0d4966-7968-5da3-b7f4-f0e0c15d7da3&function=fit&type=preview&source=false&q=75&maxsize=1200&scaleup=0",
    name:"Cristiano Ronaldo",
    position:"Forward",
    available: true,
 },
 {
        id:3,
        photo:"https://icdn.football-espana.net/wp-content/uploads/2022/06/Neymar-Junior2.jpeg",
        name:"Neymar",
        position:"Forward",
        available: true,
 },
 {
    id:4,
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyoaxrHktaR1yidLRoKFd-RhJfpF7uFYaHxw&usqp=CAU",
    name:"Pedri",
    position:"Midfilder",
    available: true,
    },
    {
        id:5,
        photo:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc2fe5b81d294c45c/6225b5b6e74bec0b12ad36ab/GettyImages-1381404937.jpg",
        name:"Kevin De Bruyne",
        position:"Midfilder",
        available: true,
     },
     {
            id:6,
            photo:"https://i.guim.co.uk/img/media/884e00f566dbadd02a0bc87daf28d8863db8e20f/0_86_4868_2920/master/4868.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e2deed38d42bf0d23b39e0540496af62",
            name:"Luka Modrić",
            position:"Midfilder",
            available: true,
     },
     {
        id:7,
        photo:"https://netstorage-sportsbrief.akamaized.net/images/00119ea336903239.jpg",
        name:"Sergio Ramos",
        position:"Difender",
        available: true,
        },
        {
            id:8,
            photo:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcb61a175a05b0b2a/6114f1dfd0bc7465ca65a04a/459530ee9b0611823e8c9899f107cd4d0e07645b.jpg",
            name:"Virgil van Dijk",
            position:"Difender",
            available: true,
         },
         {
                id:9,
                photo:"https://e0.365dm.com/22/07/768x432/skysports-lisandro-martinez_5824478.jpg?20220705145121",
                name:"Lisandro Martínez",
                position:"Difender",
                available: true,
         },

  ],
};
export const teamReducer = (state = initialState, action) => {
  console.log("reached reducer");
  switch (action.type) {
    case ADD_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };
    case ADD_PLAYER_TO_TEAM:
      // console.log("payload reducer add", action.payload);

      const stateCopy = { ...state };

      const team = stateCopy.teams.find((t) => t.id == action.payload.team.id);

      if (team) {
        let playerAlreadyAdded = false;
        stateCopy.teams.forEach((t) => {
          const existingPlayerWithSameId = t.players.find(
            (p) => p.id == action.payload.playerId
          );
          if (existingPlayerWithSameId) {
            playerAlreadyAdded = true;
          }
        });

        if (playerAlreadyAdded == false) {
          team.players.push(action.payload.player);
          const playerFromPList = stateCopy?.playerList?.find(
            (p) => p.id === action.payload.player.id
          );
          if (playerFromPList) {
            playerFromPList.available = false;
          }
          return stateCopy;
        }
      }

      return stateCopy;

    case REMOVE_PLAYER_FROM_TEAM:
      const stateClone = { ...state };
      const teams=[...state.teams]
      const playerList=[...state.playerList]
      const teamObj = teams.find(
        (t) => t.id == action.payload.team.id
      );
      console.log("reducr teamId:", action.payload);

      teamObj.players = teamObj?.players?.filter(
        (p) => p.id !== action.payload.player.id
      );
      
      const deletedPlayer=playerList.find((player)=>player.id==action.payload.player.id)
      deletedPlayer.available=true;
      console.log("stateClone", stateClone.playerList);
      return {
        ...state,
        teams:teams,
        playerList:playerList
      };

    default:
      return state;
      break;
  }
};
