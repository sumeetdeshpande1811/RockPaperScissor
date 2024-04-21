// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });
      const token = response.data.token; 
      localStorage.setItem('token', token); 
      localStorage.setItem('username', username); 
      navigate('/game');
    } catch (error) {
    alert("Invalid Username or password");
      console.log(error.response.data);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (

    
  //   <div className="login-container">
  //   <div className="login-box">
  //     <form action="">
  //       <h2>Login</h2>
  //       <div className="input-box">
  //         <span className="icon"><ion-icon name="mail"></ion-icon> </span>
  //         <input type="email" required />
  //         <label> Email</label>
  //       </div>
  //       <div className="input-box">
  //         <span className="icon"><ion-icon name="lock-closed"></ion-icon> </span>
  //         <input type="password" required />
  //         <label> Password</label>
  //       </div>
  //       <div className="remember-forget">
  //         <label>
  //           <input type="checkbox" />Remember Me
  //         </label>
  //         <a href="#">Forget Password</a>
  //       </div>
  //       <button type="Submit">Login</button>
  //       <div className="register-link">
  //         <p>Don't have an account?
  //           <a href="#">Register</a>
  //         </p>
  //       </div>
  //     </form>
  //   </div>
  // </div>
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-lg-6 col-md-8">
          <div className="card p-4">
        
            <form>
              <div className="mb-3">
              <h2>Login</h2>
           
                <input type="email" placeholder="Email/Username" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="mb-3">
               
                <input type="password" placeholder="Password" className="form-control-1" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="mb-3 d-grid">
                <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin}>Login</button>
              </div>
              <p className="mb-0 text-center" id="register">Don't have an account? <Link to="/signup">Register here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <MDBContainer className="mt-5" fluid>
    //   <MDBRow className="justify-content-center">
    //     <MDBCol lg="8">
    //       <MDBCard>
    //         <MDBRow className="m-0">
    //           <MDBCol md="6">
    //             <MDBCardImage
    //               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
    //               alt="image"
    //               fluid
    //             />
    //           </MDBCol>
    //           <MDBCol md="6">
    //             <MDBCardBody>
    //               <MDBRow className="mb-4">
    //                 <MDBCol className="text-center">
    //                   <h2>Login</h2>
    //                 </MDBCol>
    //               </MDBRow>

    //               <MDBRow className="mb-4">
    //                 <MDBCol>
    //                   <label className="font-label">Username</label>
    //                   <MDBInput
    //                     id="formControlLg"
    //                     type="text"
    //                     size="sm"  // Change size to "sm" for smaller input
    //                     value={username}
    //                     onChange={(e) => setUsername(e.target.value)}
    //                   />
    //                 </MDBCol>
    //               </MDBRow>

    //               <MDBRow className="mb-4">
    //                 <MDBCol>
    //                   <label className="font-label">Password</label>
    //                   <MDBInput
    //                     id="formControlLg"
    //                     type="password"
    //                     size="sm"  // Change size to "sm" for smaller input
    //                     value={password}
    //                     onChange={(e) => setPassword(e.target.value)}
    //                   />
    //                 </MDBCol>
    //               </MDBRow>

    //               <MDBRow className="mb-4 justify-content-center">
    //                 <MDBCol>
    //                   <button
    //                     className="btn btn-primary btn-lg"
    //                     onClick={handleLogin}
    //                     style={{ width: '100%' }}
    //                   >
    //                     Sign in
    //                   </button>
    //                 </MDBCol>
    //               </MDBRow>

    //               <MDBRow className="mb-4">
    //                 <MDBCol>
    //                   <div className="divider d-flex align-items-center">
    //                     <p className="text-center fw-bold text-black mb-0">OR</p>
    //                   </div>
    //                 </MDBCol>
    //               </MDBRow>

    //               <MDBRow className="mb-4">
    //                 <MDBCol className="text-center">
    //                   <p className="mb-0 text-black">Don't have an account?</p>
    //                   <Link to="/signup" className="fw-bold">Register here</Link>
    //                 </MDBCol>
    //               </MDBRow>

                 
    //             </MDBCardBody>
    //           </MDBCol>
    //         </MDBRow>
    //       </MDBCard>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>

  );
};

export default Login;
