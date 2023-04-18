
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';

/**
 * props as entire object
 *
 * @param {*} props
 * @return {*} 
 */
function ItemSecond(props) {
return (
    <li className="item">
    {props.name} {props.isPacked && '✔'}
    </li>
);
}

/**
 * props destructured
 *
 * @param {*} { name, isPacked }
 * @return {*} 
 */
function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked && '✔'}
      </li>
    );
  }


export default function App() {
    return (
        <section>
          <h1>Sally Ride's Packing List</h1>
          <ul>
            <Item 
              isPacked={true} 
              name="Space suit" 
            />
            <ItemSecond  
              isPacked={true} 
              name="Helmet with a golden leaf" 
            />
            <Item 
              isPacked={false} 
              name="Photo of Tam" 
            />
          </ul>
        </section>
      );
}
