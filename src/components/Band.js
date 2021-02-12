import React, { Component } from 'react'

export default class Band extends Component { 
    
  handleClick = () => {
    this.props.delete(this.props.id)
  }


    render() {
        debugger
        return (
            <div>
              <li>{this.props.name}</li>
              <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
} 
