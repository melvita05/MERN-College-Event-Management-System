import React from 'react'
import { useState,useEffect } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Loginss() {

  const nav = useNavigate();
  const[userdata,setUserdata]=useState({})
  const [errors, setErrors] = useState({});
  const host ="http://127.0.0.1:8005";


  const handleChange=(e)=>{
setUserdata({...userdata,[e.target.name]:e.target.value});
  };

  const validate = () => {
    const errors = {};
    if (!userdata.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userdata.email)) {
      errors.email = "Email is invalid";
    }
    if (!userdata.password) {
      errors.password = "Password is required";
    } else if (userdata.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit=(e)=>{
      e.preventDefault(); // Prevent default form submission behavior if this function is tried to a form submission

      if (!validate()) {
        return; // Stop submission if validation fails
      }

  axios.post(`${host}/users/userlogin`,userdata)
  .then((res)=>{
    console.log(res);
    if(res.data.success === true){
        localStorage.setItem("UserToken",JSON.stringify(res.data.userToken))
        alert("Login Successfully");
        nav("/");
    }else{
        alert("Please Enter Valid Details");

    }
})
.catch((error)=>{
    console.log(error);
    alert("An error Occured during login");
});



    };
  useEffect(()=>{
    if(localStorage.getItem("UserToken")== null){
      nav("/log");
    }
  },[]);



  return (
    <div>
      <section class="vh-100" style={{backgroundColor:" #9A616D",}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius: "1rem 0 0 1rem",width:"900px",height:"574px",marginRight:"300px",marginTop:"10px"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="login form" class="img-fluid" style={{borderRadius: "1rem 0 0 1rem",height:"100%"}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                     {/* <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>  */}
                    <Diversity1Icon sx={{ display: { xs: 'large', md: 'flex' }, mr: 1 ,background:"black"}} /> 
                    <span class="h1 fw-bold mb-0" style={{color:"black"}}>MDS </span><h2  style={{color:"black",marginTop:"10px"}}>College</h2>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing:" 1px",color:"black"}}>Sign into your account</h5>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" name='email' onChange={handleChange} style={{border:"1px solid black"}} />
                    <label class="form-label" for="form2Example17">Email address</label>
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" name='password' onChange={handleChange} style={{border:"1px solid black"}}/>
                    <label class="form-label" for="form2Example27" >Password</label>
                    {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}

                  </div>

                  <div class="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="button" onClick={handleSubmit}>Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? 
                  <Link to="/Reg" > <a href="#!" style={{color: "#393f81"}}>Register here</a></Link></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}



