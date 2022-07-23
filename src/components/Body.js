import React from 'react'
import Button from './Button'
import style from '../style/Body.module.css'

function Body() {
  return (
    <div className={style.bodyDiv}>
      <div className={style.bodyText}>
         <h2>New album release!</h2>
         <span>"Present Days" is a moving tribute to a life on the road</span>
         <span>Support Max by downloading the album on CDBaby.com!</span>
         <br></br>
         <Button text="Go to album"/>
      </div>
    </div>
  )
}

export default Body