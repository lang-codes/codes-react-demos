

'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'


export default function Form() {
    const [name, setName] = useState('Taylor');
    const [age, setAge] = useState(42);

    function getNameAge() {
        setName(document.getElementById("name").value);
        setAge(document.getElementById("age").value);
        // alternatively submit the form
    }


    return (
        <>
            <input id="name" />
            <input id="age" />
            <button onClick={getNameAge}>
                Increment age
            </button>
            <p>Hello, {name}. You are {age}.</p>
        </>
    );
}
