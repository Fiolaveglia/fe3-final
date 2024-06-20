import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <div className="foot-init">
        <p>Powered by</p>
        <img src='/images/DH.png' alt='DH-logo' />
      </div>
        <ul className='social-list'>
          <li><FontAwesomeIcon icon={faInstagram} style={{fontSize: '24px'}}/></li>
          <li><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '24px' }} /></li>
          <li> <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '24px' }}/></li>
          <li><FontAwesomeIcon icon={faTiktok} style={{ fontSize: '24px' }} /></li>
        </ul>
    </footer>
  )
}

export default Footer
