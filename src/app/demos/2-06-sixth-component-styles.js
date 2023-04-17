
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';
import { useState } from 'react';

// Method One import styles as Object to be used
import styles from '../page.module.css'

// https://blog.logrocket.com/styling-react-5-ways-style-react-apps/

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

  // using styles inside {{ styles: "10px 20px" }}
  return (
    <section style={{ border: '1px', padding: "10px" }}>
      <h1>Testing Card</h1>
      <button onClick={handleClick} style={{ margin: "10px 20px", padding: spacing }}>
      You pressed me {count} times
    </button>
    </section >
  );
}