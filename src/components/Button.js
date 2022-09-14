import React from 'react'
import style from '../style/Button.module.css'
/*
This is a modular component that can be used for buttons
across the site, including in Signup.js and Body.js.
*/
function Button(props) {
  return (
    <button className={style.button}>{props.text}</button>
  )
}

export default Button