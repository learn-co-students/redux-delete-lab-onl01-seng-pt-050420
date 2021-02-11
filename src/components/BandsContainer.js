import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = (bands) => {
    // debugger
    return (
      bands.map((band, index) => {
        return <div><Band key={index} band={band} deleteBand={this.props.deleteBand} /></div>
      })
    )
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} deleteBand={this.props.deleteBand} />
        <ul>
          {this.renderBands(this.props.bands)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  debugger
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: arg => dispatch({ type: "ADD_BAND", payload: arg }),
    deleteBand: arg => dispatch({ type: "DELETE_BAND", payload: arg })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
