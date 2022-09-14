import React from 'react'
import style from '../style/Social.module.css'
import Icon from './Icon'
import soundcloud from './images/soundcloud.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import youtube from './images/youtube.png'
/*
This component renders a series of components that could serve as links
to social media at the bottom of the page.
The name and icon image file are entered as props for each.
*/
function Social() {
  return (
    <div className={style.socialDiv}>
      <span>Follow Max on social media:</span>
      <div className={style.iconRow}>
         <Icon name="SoundCloud" img={soundcloud} />
         <Icon name="Instagram" img={instagram} />
         <Icon name="Twitter" img={twitter} />
         <Icon name="YouTube" img={youtube} />
      </div>
    </div>
  )
}

export default Social