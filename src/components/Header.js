import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Header = props=>{
  return(
    <ul className="Nav">
      <li><NavLink exact to='/home' >Home</NavLink></li>
      <li><NavLink to='/home/personal/01'>Personal information</NavLink></li>
      <li><NavLink to='/home/skill'>Skills</NavLink></li>
      <li><NavLink to='/home/portfolio'>Portfolio</NavLink></li>
    </ul>
  )
}

export default Header;
