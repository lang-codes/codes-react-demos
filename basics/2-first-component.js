/** 
 * Reactjs Demos
 * Usage: Using components inside JSX
*/

import React from 'react';

function ThemeComponent(props) {
  return <div>ThemeComponent: Testing the {props.theme} </div>;
}

class RectorComponent extends React.Component {
  render() {
    return <div>RectorComponent: Testing this {this.props.theme} </div>;
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
