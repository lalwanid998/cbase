import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Router basename="cbase">
      <Routes>
      <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;