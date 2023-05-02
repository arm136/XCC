import React, { useState } from "react";
import {
    MDBInput,
    MDBTextArea,
    MDBBtn,
} from "mdb-react-ui-kit";

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Message sent!');
        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        
        <div className="contact_form">
            <form onSubmit={handleSubmit}>
                <MDBInput
                    value={name}
                    className="mb-4"
                    type="text"
                    id="name"
                    label="Name"
                    onChange={handleNameChange}

                />

                <MDBInput
                    value={email}
                    className="mb-4"
                    type="text"
                    id="email"
                    label="Email"
                    onChange={handleEmailChange}
                />

                <MDBTextArea
                    value={message}
                    className="mb-4"
                    type="text"
                    id="message"
                    label="Message"
                    onChange={handleMessageChange}
                />

                <MDBBtn type="submit" block>
                    Submit
                </MDBBtn>
            </form>
        </div>
    );
};
