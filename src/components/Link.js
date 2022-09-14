import React from 'react'
import style from '../style/Link.module.css'
/*
This is the child component of Footer.js, providing possible links
onthe lower section of the page.
*/
function Link(props) {
  return (
    <div className={style.linkDiv}>
      <div className={style.circle}></div>
      <span className={style.name}>{props.name}</span>
      <span className={style.description}>{props.description}</span>
    </div>
  )
}

export default Link