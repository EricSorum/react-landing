import React from 'react'
import style from '../style/Header.module.css'

function header() {
  return (
    <div className={style.headerDiv}>
      <h3>Max the Axe Man</h3>
      <span>songwriter | session musician</span>
   </div>
  )
}

export default header