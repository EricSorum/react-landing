import React from 'react'
import style from '../style/Icon.module.css'
/*
This is the child component for Social.js, providing possible links
to social media at the bottom of the page.
*/
function Icon(props) {
  return (
    <div className={style.iconDiv}>
      <img src={props.img} alt={props.name}></img>
      <span>{props.name}</span>
    </div>
  )
}

export default Icon