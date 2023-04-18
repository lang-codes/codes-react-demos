

'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'


export default function Form() {
    const [name, setName] = useState('Taylor');
    const [age, setAge] = useState(42);

    function getNameAge() {
        console.log(JSON.stringify({ name, age }));
        alert(JSON.stringify({ name, age }));
    }

    function setNameValue(val) {
        setName(val);
    }

    function setAgeValue(val) {
        setAge(val);
    }

    return (
        <>
            <input id="name" onChange={(e) => setNameValue(e.target.value)} value={name} />
            <input id="age" onChange={(e) => setAgeValue(e.target.value)} value={age} />
            <button onClick={getNameAge}>
                Increment age
            </button>
            <p>Hello, {name}. You are {age}.</p>
        </>
    );
}
