import React from 'react';
import "./NavBar.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';


export class NavBar extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Music App
    </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
