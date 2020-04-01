import React from 'react';
//t { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

//For Online here
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.online !== this.state.online) {
      if (!this.state.online) {
        this.props.addNotification("Your application is offline. You won't be able to share or stream music to other devices.");
      }
    }
  }

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={<Switch checked={this.state.online} onChange={this.handleChange} name="online" />}
          label={this.state.online ? "Online" : "Offline"}
        />
      </FormGroup>
    );
  }
}

//For Volume here
class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 30,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    event.preventDefault();
    this.setState({
      value: newValue,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value < this.state.value) {
      if (this.state.value > 80) {
        this.props.addNotification("Listening to music at a high volume could cause long-term hearing loss.");
      }
    }
  }

  render() {
    return (
      <div style={{ width: "200px" }}>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              value={this.state.value}
              onChange={this.handleChange}
              aria-labelledby="continuous-slider"
              step={10}
              marks
              min={0}
              max={100}
            />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>

      </div>
    );
  }
}

//Sound Quality here
class SoundQuality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quality: "low",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      quality: event.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.quality !== this.state.quality) {
      if (this.state.quality === "low") {
        this.props.addNotification("Music quality has degraded. Increase quality if your connection allows it.");
      }
    }
  }

  render() {
    return (
      <div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Quality</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.quality}
            onChange={this.handleChange}
          >
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"normal"}>Normal</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };

    this.addNotification = this.addNotification.bind(this);
  }

  addNotification(msg) {
    const notifications = [...this.state.notifications, msg];
    this.setState({
      notifications: notifications,
    })
    console.log(notifications);
  }

  render() {
    return (
      <div>
            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card className="Card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Online Mode :
              </Typography>
              <CardActions>
            <OnlineSwitch addNotification={this.addNotification} />
            </CardActions>
          </CardContent>
        </Card>

        <Card className="Card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Master Volume
            </Typography>
            <CardActions>
            <VolumeSlider addNotification={this.addNotification} />
            </CardActions>
          </CardContent>
        </Card>

        <Card className="Card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Sound Quality
            </Typography>
            <CardActions>
            <SoundQuality addNotification={this.addNotification} />
            </CardActions>
          </CardContent>
         
        </Card>
        <div>
          <h3>System Notifcations</h3>
          <ul>
            {this.state.notifications.map((msg, i) => {
              return (
                <li key={i}>{msg}</li>
              );
            })}
          </ul>
        </div>
        </Container>
       </React.Fragment>
      </div>
    );
  }
}