

'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'


export default function MyInput() {
    const [text, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </>
    );
}