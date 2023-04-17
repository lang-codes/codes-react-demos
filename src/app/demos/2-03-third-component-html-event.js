
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';


/**
 * 1. props as entire object
 * 2. event is invoked as onEvent like onClick = {functionname}
 * 3. if you want to pass props use a function wrapper
 *          onClick = {() => functionname(props)}
 *
 * @param {*} props
 * @return {*} 
 */
function ItemSecond(props) {
  
  function testingalert(val) {
    alert(val);
  }

  return (
    <button onClick={() => testingalert(props.value)}>Test button</button>
  );
}

export default function App() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <ItemSecond value="val"/>
      </ul>
    </section>
  );
}
