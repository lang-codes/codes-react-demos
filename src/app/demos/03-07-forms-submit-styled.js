

'use client'

import React from 'react';
import "../globals.css";
import { useState, useRef } from "react";

const Form = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ user, password })
    };

    return (
        <div className="{{styles.card}}">
            <div className="{{styles.card styles.card-container}}">

                <Form onSubmit={handleLogin} >

                    <submit>Submit</submit>
                </Form>
            </div>
        </div>
    );
};

export default Form;

