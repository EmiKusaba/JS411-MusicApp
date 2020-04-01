import React, { Component } from 'react';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { NavBar } from './Components/NavBar';
import { LogIn } from './Components/LogIn';


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
    return (
      <div>
        <NavBar />
        {
          this.state.loggedIn ?
            <Dashboard />
            :
            <LogIn
              onLoginSubmit={this.onLoginSubmit}
            />
        }
      </div>
    );
  }
}

export default App;
