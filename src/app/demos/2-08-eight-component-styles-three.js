
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'
import styled from 'styled-components'

const spacing = "10px 20px";
const Header = {
  margin: "10px 20px",
  padding: spacing
}

// import styles from 'styled-components'
// Using styled components
// npm install --save styled-components
// https://blog.logrocket.com/benefits-using-styled-components-react/
const Divheader = styled.div`
  padding: 10px 20px;
  text-align: center;
  color: white;
  `

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
    <section style={{ border: '1px', padding: "10px" }}>
      <Divheader>
        <h1>Testing Card</h1>
        <button onClick={handleClick} style={Header}>
          You pressed me {count} times
        </button>
      </Divheader>
    </section>
  );
}
