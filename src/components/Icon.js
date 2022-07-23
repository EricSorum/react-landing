import React from 'react'
import style from '../style/Icon.module.css'

function Icon(props) {
  return (
    <div className={style.iconDiv}>
      <img src={props.img} alt={props.name}></img>
      <span>{props.name}</span>
    </div>
  )
}

export default Icon