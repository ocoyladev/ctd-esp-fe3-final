import React from 'react'
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state } = useContextGlobal();
  const isDark = state.theme;
  return (
    <footer className={`${!isDark ? 'footerDark' : ''}`}>
      <div className='divCentral divAll'>
        <div className='divSpace'>
          <div>
            <img className={`${!isDark ? 'imgFooterDark' : 'imgFooter'}`} src="./images/DH.png" alt='DH-logo' />
            
          </div>
          <div>
            <img className="iconFooter" src="./images/ico-facebook.png" alt='facebook' />
            <img className="iconFooter" src="./images/ico-instagram.png" alt='instagram' />
            <img className="iconFooter"  src="./images/ico-tiktok.png" alt='tiktok' />
            <img className="iconFooter"  src="./images/ico-whatsapp.png" alt='whatsapp' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
