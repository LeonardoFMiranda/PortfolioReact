import React from 'react'
import './SmallCard.css'

function SmallCard({projectNumber,projectType}) {
  return (
    <div className='smallBox'>
        <h2>{projectNumber}</h2>
        <h3>{projectType}</h3>
    </div>
  )
}

export default SmallCard