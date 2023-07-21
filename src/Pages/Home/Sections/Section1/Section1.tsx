import Productivity from './Categories/Productivity';
import { Categories } from './Categories';
import React, { useState } from 'react';


function LandingSection1() {
  const[ category, setCategory ] = useState(Categories[0])
  return (
    <>
        <div
          id="Section1Content"
          className="ContentRow"
          style={{ flexGrow: 3, width: "100%", display: "flex" }}
        >
          {React.createElement(category.component) }
        </div>
        <div style={{ flexGrow: 1, width: "100%" }}>sdf</div>
    </>
  )
}

export default LandingSection1