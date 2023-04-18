
/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/
'use client'

import React from 'react';

function ThemeComponent(props) {
  return <div>ThemeComponent: Testing the {props.theme} </div>;
}

// This will not be rendered in the nextjs App
// Will error out 
// 
// class RectorComponent extends React.Component {
//                             ^
// render() {
//  return <div>RectorComponent: Testing this {this.props.theme} </div>;
//   }
//
// Change the function to remove the render() function
//    or change the page to add 'use client' on the top and downgrade to 
//    'use client'
// 


class RectorComponent extends React.Component {
  constructor(props) {
    super()
    this.props = props;
  }
  render() {
    return <div>RectorComponent: Testing this props.theme </div>;
  }
}

export default function App() {
  return (
    <div>
      <h1>Hello Starter!</h1>

      <ThemeComponent theme="dark" />
      <br />
      
      <RectorComponent theme="dark" />
      <br />
      
    </div>
  );
}
