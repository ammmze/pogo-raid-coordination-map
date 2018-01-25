import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class GymDetails extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <Button bsStyle="primary">Report Raid</Button>
      </div>
    )
  }
}