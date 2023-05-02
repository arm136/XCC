import React, { useState } from "react";
import { Login } from "../log_auth/login";
import { Signup } from "../log_auth/Signup";

function Log() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <>
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
            }
        </>
    );
}

export default Log;