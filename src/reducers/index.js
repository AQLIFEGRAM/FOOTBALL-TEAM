import { combineReducers } from "redux";
import { teamReducer } from "./footballReducer";


export const rootReducer = combineReducers({
  teamsReducer: teamReducer,

});