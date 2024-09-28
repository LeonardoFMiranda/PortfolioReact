import React from 'react'
import './DarkMode.css'	

function DarkMode({ darkMode, onDarkModeToggle }:any) {
  return (
    <div className='darkmode-mobile__container'>
        <div className="darkmode-outercircle">
            <div className="darkmode-innercircle" onClick={onDarkModeToggle}>

            </div>
        </div>
    </div>
  )
}

export default DarkMode