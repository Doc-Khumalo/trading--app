import React, { Component } from 'react';
import './App.css';
import AgentDetails from './components/AgentDetails/AgentDetails';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="wrapper">
              <AgentDetails />
              <Dashboard />
          </div>
      </div>
    );
  }
}

export default App;
