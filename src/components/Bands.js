import React from "react"
import Band from "./Band";

export const Bands = (props) => {

  return (
    <div>
      { 
        props.bands.map(band => 
          <Band key={ band.id } { ...band } deleteBand={ props.deleteBand } />
        )
      }
    </div>
  )
}