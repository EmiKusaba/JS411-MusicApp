import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class OnlineSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.checked,
    });
  }

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={<Switch checked={this.state.online} onChange={this.handleChange} name="online" />}
          label="Online"
        />
      </FormGroup>
    );
  }
}

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Card className="Card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Online Mode :
              </Typography>
            <OnlineSwitch />
          </CardContent>
        </Card>

        <Card className="Card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Master Volume
            </Typography>
          </CardContent>
        </Card>

        <Card className="Card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Sound Quality
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}