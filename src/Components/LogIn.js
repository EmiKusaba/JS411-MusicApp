import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


export class LogIn extends React.Component {
  render() {
    return (
      <div>
         <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <TextField className="Field" label="User Name" /> <br />
        <TextField className="Field" label="Password" /> <br />
        <Button color="inherit" className="Login" onClick={this.props.onLoginSubmit}>Login</Button> <br />
        </Container>
        </React.Fragment>
      </div>
    )
  }
}
