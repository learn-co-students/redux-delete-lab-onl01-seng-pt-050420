import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
        <li>{this.props.band}<button onCLick={this.props.removeBand(this.props.band.id)}>DELETE</button></li>
    );
  }
};

export default Band;
