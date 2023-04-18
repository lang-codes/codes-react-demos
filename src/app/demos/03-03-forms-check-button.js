

'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'


export default function MyCheckbox() {
    const [liked, setLiked, getLiked] = useState(true);

    function handleChange(e) {
        setLiked(e.target.checked);
    }

    function handleGetter(e) {
        alert(document.getElementById("inputbox").value);
    }

    return (
        <>
            <label>
                <input id="inputbox"
                    type="checkbox"
                    checked={liked}
                    onChange={handleChange}
                />

                I liked this
            </label>
            <button onClick={handleGetter}>Get Liked</button>
            <p>You {liked ? 'liked' : 'did not like'} this.</p>
        </>
    );
}