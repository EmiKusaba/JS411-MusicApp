import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import { Dashboard } from './Components/Dashboard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit(e) {
    e.preventDefault();
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    return this.state.loggedIn ? (
      <Dashboard />
    ) :
      (
        <div>
          <NavBar
            onLoginSubmit={this.onLoginSubmit}
          />
        </div>
      );
  }
}

export default App;
