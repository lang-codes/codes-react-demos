
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';
import { useState } from 'react';


export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <section>
      <button onClick={handleClick}>
        You pressed me {count} times
      </button>
    </section>
  );
}
