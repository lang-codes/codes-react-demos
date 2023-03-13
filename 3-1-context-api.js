/** 
 * Reactjs Demos
 * Usage: Context APIs
*/

import React from 'react';

const ThemeContext = React.createContext('light');

class ThemeContextComponent extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <div>Testing the {this.context} </div>;
  }
}

function useTask(context) {
  return React.useContext(context);
}

function ThemeFunctionUseContextComponent(props) {
  return (
    <div>
      ThemeFunctionUseContextComponent: Testing the {useTask(ThemeContext)}{' '}
    </div>
  );
}

function ThemeFunctionContextComponent(props) {
  var contextType = ThemeContext;
  return (
    <div>
      ThemeFunctionContextComponent: Testing the context <br /> current Value: {contextType._currentValue}, <br />{' '}
      current value 2: {contextType._currentValue2}, <br /> default value:{' '}
      {contextType._defaultValue} <br /> Global Name: {contextType._globalName}{' '}
      <br /> ThreadCount: {contextType._threadCount}{' '}
    </div>
  );
}

function ThemeFunctionUseContextComponent(props) {
  var contextType = React.useContext(ThemeContext);
  return (
    <div>ThemeFunctionUseContextComponent: Testing the context {contextType} </div>
  );
}

function WithContext(Component) {
  return (props) => (
    <ThemeContext.Consumer>
      {(value) => <Component {...props} context={value} />}
    </ThemeContext.Consumer>
  )
}

function ElementWithContextFunctionPattern(Component) {
  return ((props) => (
    <ThemeContext.Consumer>
      {(context) => (
        <ThemeFunctionUseContextTwoComponent {...props} context={context} />
      )}
    </ThemeContext.Consumer>
  ))();
}

function ThemeFunctionUseContextTwoComponent(props) {
  return <div>ThemeFunctionUseContextTwoComponent: Testing the context={props.context} </div>;
}

var ThemeFunctionUseContextThreeComponent = WithContext(
  ThemeFunctionUseContextTwoComponent
);

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
      
      <ThemeContext.Provider value="dark">
        <ThemeContextComponent />
      </ThemeContext.Provider>
      <br />
      
      <ThemeContext.Provider value="dark">
        <ThemeFunctionContextComponent />
      </ThemeContext.Provider>
      <br />

      <ThemeContext.Provider value="dark">
        <ThemeFunctionUseContextThreeComponent />
      </ThemeContext.Provider>
      <br/>

      <ThemeContext.Provider value="dark">
        <ThemeFunctionUseContextComponent />
      </ThemeContext.Provider>
      <br />

      <ThemeContext.Provider value="dark">
        <ElementWithContextFunctionPattern />
      </ThemeContext.Provider>

    </div>
  );
}
