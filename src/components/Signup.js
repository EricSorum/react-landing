import React from 'react'
import Button from './Button'
import style from '../style/Signup.module.css'

function Signup() {
  return (
    <div className={style.signupDiv}>
      <span>Sign up for Max's newsletter!</span>
      <span>Learn about future performances or book him for your own gig.</span>
      <div className={style.emailDiv}><label htmlFor='email'>Enter email address: </label>
      <input type='email'></input><Button text="Submit"/></div>
    </div>
  )
}

export default Signup