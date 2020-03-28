import React from 'react';
//t { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

  render() {
    return (
      <div style={{ width: "200px" }}>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={this.value} onChange={this.handleChange} aria-labelledby="continuous-slider" />
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
            <VolumeSlider />
          </CardContent>
        </Card>

        <Card className="Card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Sound Quality
            </Typography>
            <SoundQuality />
          </CardContent>
        </Card>
      </div>
    );
  }
}