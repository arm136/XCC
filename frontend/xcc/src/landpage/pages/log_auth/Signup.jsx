import React, { useState } from "react";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBTypography
} from "mdb-react-ui-kit";


export const Signup = (props) => {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, name, pass);
    }

    return (
        <div className="signup_form">

            <form onSubmit={handleSubmit}>
                <MDBRow>
                    <MDBCol md="8">
                        <MDBTypography variant='h1'>XCC Signup</MDBTypography>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mb-4"
                            type="name"
                            id="name"
                            label="Name"
                        />

                        <MDBInput
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            className="mb-4"
                            type="password"
                            id="pass"
                            label="Password"
                        />

                        <MDBInput
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            className="mb-4"
                            type="password"
                            id="confirm-pass"
                            label="Confirm Password"
                        />

                        <MDBRow className="mb-4">
                            <MDBCol className="d-flex justify-content-center">
                                <MDBCheckbox
                                    id="remember-me"
                                    label="Remember me" defaultChecked
                                />
                            </MDBCol>
                            <MDBCol>
                                <a href="#!">Forgot password?</a>
                            </MDBCol>
                        </MDBRow>

                        <MDBBtn type="submit" block>
                            Signup
                        </MDBBtn>
                        <br /><br />
                    </MDBCol>

                    <MDBCol className="col2">
                        <MDBTypography>
                            Already have an account?
                        </MDBTypography>
                        <MDBBtn onClick={() => props.onFormSwitch('login')}>
                            Login
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>

            </form>
        </div>
    );
}