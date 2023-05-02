import React from 'react'
import chorus from "../Images/chorus.png"
import reddit from "../Images/reddit.png"
import tcs from "../Images/tcs.png"
import pantera from "../Images/pantera.png"

function PartnersSection() {
  return (
    <div className='partners-section'>
      <h2>Our Partners</h2>
      <div className="companies-grid">
        <img src={pantera} />
        <img src={reddit} />
        <img src={tcs} />
        <img src={chorus} />
        <img src={pantera} />
      </div>
    </div>
  )
}

export default PartnersSection