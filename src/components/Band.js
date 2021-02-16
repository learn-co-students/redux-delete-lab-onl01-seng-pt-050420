import React, { Component } from 'react';

class Band extends Component {
 
  render() {
    console.log(this.props.band)
    return(
      <div>
       <li>{this.props.name}</li>
       <button onClick={()=> this.props.delete(this.props.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
