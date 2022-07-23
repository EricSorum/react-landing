import React from 'react'
import style from '../style/Link.module.css'

function Link(props) {
  return (
    <div className={style.link}>
      <div className={style.circle}></div>
      <span className={style.name}>{props.name}</span>
      <span>{props.description}</span>
    </div>
  )
}

export default Link