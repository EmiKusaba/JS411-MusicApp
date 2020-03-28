import React from 'react';
import "./NavBar.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class NavBar extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Music App
    </Typography>
          </Toolbar>

          <TextField className="Field"label="User Name" /><br />
          <TextField className="Field"label="Password" /><br />
          <Button color="inherit" className="Login" onClick={this.props.onLoginSubmit}>Login</Button><br />
        </AppBar>
      </div>
    )
  }
}
export default NavBar;