import logo from "./logo.svg";
import "./App.css";
import Teams from "./components/Teamcard";
import Header from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Players from "./components/playercard";
import TeamDetails from "./components/teamDetails";
import "./class.css";




function App() {
  return (
    <>

      <Header />
    
     

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/teams" element={<Teams />} /> */}
        <Route path="/players" element={<Players />} />
        <Route path="/teamDetails" element={<TeamDetails />} />
      </Routes>


    </>
  );
}

export default App;

