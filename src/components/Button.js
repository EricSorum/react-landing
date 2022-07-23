import React from 'react'
import style from '../style/Button.module.css'

function Button(props) {
  return (
    <button className={style.button}>{props.text}</button>
  )
}

export default Button