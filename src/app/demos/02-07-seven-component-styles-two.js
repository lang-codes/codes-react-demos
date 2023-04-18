
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'

export default function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const spacing = "10px 20px";
  const Header = {
    margin: "10px 20px",
    padding: spacing
  }

  // using styles inside {{ styles: "10px 20px", margin: spacing}}
  return (
    <section style={{ border: '1px', padding: "10px" }}>
      <h1>Testing Card</h1>
      <button onClick={handleClick} style={Header}>
        You pressed me {count} times
      </button>
    </section>
  );
}
