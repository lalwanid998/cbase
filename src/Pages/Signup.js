import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
    const navigate = useNavigate();

    const [input,setInput] = useState({
        name:"",
        gender:"",
        email:"",
        mobile:"",
        password:""
    });

    const handleSubmit = (e) => {
        var myformdata = new FormData()
        myformdata.append("st_name",input.name)
        myformdata.append("st_gender",input.gender)
        myformdata.append("st_email",input.email)
        myformdata.append("st_mobileno",input.mobile)
        myformdata.append("st_password",input.password)
        axios.post("https://akashsir.in/myapi/crud/student-add-api.php",myformdata)
        .then(res=>{
            console.log(res);
            if (res.data.flag==="1") {
                alert("Data Added"+res.data.message);
                navigate("/login");
            } else {
                alert(res.data.message);
            }
        })
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
    };
  return(
    <>
  <div className="wrapper">
    <h2>Signup</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text" placeholder="Enter your name" name="name" defaultValue={input.name} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            } />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your Gender" name="gender" defaultValue={input.gender} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            } />
      </div>
      <div className="input-box">
        <input type="email" placeholder="Enter your email" name="email" defaultValue={input.email} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box">
        <input type="number" placeholder="Mobile" name="mobile" defaultValue={input.name} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" name="password" defaultValue={input.password} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box button">
        <input type="Submit" defaultValue="Signup Now" />
      </div>
    </form>
    <p>Already have an account? <Link to="/login"><u>Login Now</u></Link></p>
  </div>
    </>
    );
};

export default Signup;