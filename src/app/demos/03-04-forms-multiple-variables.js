

'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'


export default function Form() {
    const [name, setName] = useState('Taylor');
    const [age, setAge] = useState(42);

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setAge(age + 1)}>
                Increment age
            </button>
            <p>Hello, {name}. You are {age}.</p>
        </>
    );
}
