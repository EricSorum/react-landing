import React from 'react'
import Link from './Link'
import style from '../style/Footer.module.css'
/*
This component renders a series of components that could be links to other parts
of a site.
*/
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