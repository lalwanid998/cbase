import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const handleLogin = (e) => {
    var myformdata = new FormData()
        myformdata.append("st_email",input.email)
        myformdata.append("st_password",input.password)
        axios.post("https://akashsir.in/myapi/crud/student-login-api.php",myformdata)
        .then(res=>{
            //console.log(res);
            if (res.data.flag==="1") {
                alert("Data Added"+res.data.message);
            } else {
                alert(res.data.message);
            }
        })
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
          localStorage.setItem("loggedin",true);
          navigate("/home");
        }else{
          alert("Wrong Email and Password");
        }
  };

  return(
    <>
    <div className="wrapper">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" name="email" defaultValue={input.email} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Enter Password" name="password" defaultValue={input.password} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box button">
        <input type="Submit" defaultValue="Login" />
      </div>
    </form>
    <p>Don't have an account? <Link to ="/"><u>Signup Now</u></Link></p>
  </div>
    </>
    );
};

export default Login;