import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        localStorage.removeItem("user");
        navigate("/login");
    }
    return(
        <>
         <h2>Welcome to Home Page {userName.name}</h2>
         <button onClick={handleLogout} type="button" defaultValue="submit" name="Submit">Logout</button>
        </>
    );
}
export default Home;