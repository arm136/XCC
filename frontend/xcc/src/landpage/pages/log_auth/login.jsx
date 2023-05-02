import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBTypography
} from "mdb-react-ui-kit";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/login', username, pass)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    if (validateCredentials(username, pass)) {
      setMessage('Login successful');
      navigate('/UserNav');
    }

    else {
      setMessage('Invalid username or password');
    }
  };

  const validateCredentials = (username, pass) => {
    return username === 'admin' && pass === 'admin';
  };

  const navigate = useNavigate();


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(username);
  // };

  return (
    <div className="log_form">

      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol md="8">
            <MDBTypography variant="h1">XCC Login</MDBTypography>
            <br />
            <MDBInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-4"
              type="username"
              id="usrnm"
              label="Username"
            />

            <MDBInput
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="mb-4"
              type="password"
              id="pass"
              label="Password"
            />

            <MDBRow className="mb-4">
              <MDBCol className="d-flex justify-content-center">
                <MDBCheckbox
                  id="rememberme"
                  label="Remember me"
                  defaultChecked
                />
              </MDBCol>
              <MDBCol>
                <a href="#!">Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <MDBBtn type="submit" block>
              Login
            </MDBBtn>
            <br />
            <br />
          </MDBCol>

          <MDBCol className="col2">
            <MDBTypography>Don't have an account?</MDBTypography>
            <MDBBtn onClick={() => props.onFormSwitch("signup")}>
              SignUp
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </form>
      {message && <p style={{color: "Red"}}>{message}</p>}
    </div>
  );
};
