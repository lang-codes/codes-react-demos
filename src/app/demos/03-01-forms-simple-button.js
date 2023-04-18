
'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'


export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            You pressed me {count} times
        </button>
    );
}
