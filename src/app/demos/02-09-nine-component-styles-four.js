
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'

const spacing = "10px 20px";
const Header = {
  margin: "10px 20px",
  padding: spacing
}

const Label = { padding: "10px 20px", textAlign: "left", border: "10px solid #000" };

const Combined = {
  Label: Label,
  Header: Header
}

export default function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // import styles from 'styled-components'
  // Using styled components
  // npm install --save styled-components
  // https://blog.logrocket.com/benefits-using-styled-components-react/
  return (
    <section style={Combined}>
      <h1 style={Combined.Header}>Testing Card</h1>
      <button onClick={handleClick} style={Combined.Label}>
        You pressed me {count} times
      </button>
    </section>
  );
}
