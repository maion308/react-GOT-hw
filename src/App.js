import React from 'react';
import './App.css';
import Characters from './components/Characters'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <h1>Characters from Game of Thrones</h1>
      <Nav onClick={()=>{this.props.componentDidMount()}} />
      <Characters />
    </div>
  );
}

export default App;