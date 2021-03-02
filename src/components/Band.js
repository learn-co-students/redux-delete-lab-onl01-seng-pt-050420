import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.delete(this.props.id)
  };

  render() {
      console.log(this.props)
    return(
      <div>
        <li>
          {this.props.band}
          <button onClick={this.handleClick}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
