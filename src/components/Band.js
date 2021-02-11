import React, { Component } from 'react';

class Band extends Component {

  clickHandler = bandId => {
    this.props.deleteBand(bandId)
  }

  render() {
    return(
    <li key={this.props.key}>
      {this.props.band.name}{"  "}
      <button onClick={() => this.clickHandler(this.props.band.id)}>
        Delete
      </button>
    </li>
    );
  }
};

export default Band;
