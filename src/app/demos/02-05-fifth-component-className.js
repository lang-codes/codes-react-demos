
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';
import { useState } from 'react';
import styles from '../page.module.css'

export default function App() {
  
  // using class as className = "{styles.cssnameinabovecssfile}"
  // using class as className = "{styles.card}"
  return (
    <section className="{styles.card}" style={{ border: '1px', padding: "10px" }}>
      <h1>Testing Card</h1>
      <button style={{ padding: "10px" }}>
        You pressed me times
      </button>
    </section>
  );
}
