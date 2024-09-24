import React from 'react'
import './SmallCard.css'

function SmallCard({hardSkillLogo,hardSkillNome}) {
  return (
    <div className='smallBox'>
        <img src={hardSkillLogo} alt="" />
        <h3>{hardSkillNome}</h3>
    </div>
  )
}

export default SmallCard