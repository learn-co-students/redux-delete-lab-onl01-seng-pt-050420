import React from 'react';
import Band from './Band';

const Bands = props => {
    //debugger
    return (
        <div>
          {props.bands.map(band => <Band key={band.id} {...band} delete={props.delete}/>)}
        </div>
    )
}

export default Bands 


//delete={props.delete}