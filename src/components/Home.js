import React from 'react'

import RobinStoreMobile from '../assets/RobinStoreMobile.png';
import RobinStoreLaptop from '../assets/RobinStoreLaptop.png';
import { isMobile } from 'react-device-detect';

export default function Home() {
  return (
    <div style={{ position:'relative', height: '100vh', pointerEvents: 'none', display: 'flex', flexDirection: isMobile ? 'column':'row', alignItems: 'center' }} id="Home">
        <div style={{left: isMobile ? 0:227, top: isMobile ? 100:302, position: isMobile ? 'relative':'absolute', color: 'black', fontSize: isMobile ? 27:48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>placeholder</div>
    
        { !isMobile &&
          <img style={{width: 626, height: 344, left: 858, top: 302, position: 'absolute'}} src={RobinStoreLaptop} alt="Robin Store Logo on a Laptop Screen" />
        }
        
        <img style={{width: 283.84, height: 592, left: isMobile ? 0:773, top: 183, position: isMobile ? 'relative':'absolute', marginTop: '2em'}} src={RobinStoreMobile} atl="Robin Store Logo on a Mobile Screen" />  
    </div>
  )
}
