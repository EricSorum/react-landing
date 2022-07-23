import React from 'react'
import Link from './Link'
import style from '../style/Footer.module.css'

function Footer() {
  return (
    <div className={style.footerDiv}>
      <div className={style.linkDiv}>
         <Link name='Contact' description='Hire Max for a music gig'/>
         <Link name='Blog' description='Go to blog' />
         <Link name='Resume' description='Download resume' />
      </div>
    </div>
  )
}

export default Footer