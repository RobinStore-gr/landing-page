import React from 'react'

import RobinStoreLogo from '../assets/robin-logo-white-512.png';
import RobinMobile from '../assets/robin-mobile.png';
import { isMobile } from 'react-device-detect';

export default function Home() {
  return (
    // <div style={{ position:'relative', height: '100vh', pointerEvents: 'none', display: 'flex', flexDirection: isMobile ? 'column':'row', alignItems: 'center' }} id="Home">
    //     <div style={{left: isMobile ? 0:227, top: isMobile ? 100:302, position: isMobile ? 'relative':'absolute', color: 'black', fontSize: isMobile ? 27:48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>placeholder</div>
    
    //     { !isMobile &&
    //       <img style={{width: 626, height: 344, left: 858, top: 302, position: 'absolute'}} src={RobinStoreLaptop} alt="Robin Store Logo on a Laptop Screen" />
    //     }
        
    //     <img style={{width: 283.84, height: 592, left: isMobile ? 0:773, top: 183, position: isMobile ? 'relative':'absolute', marginTop: '2em'}} src={RobinStoreMobile} alt="Robin Store Logo on a Mobile Screen" />  
    // </div>
    <div
      style={{ 
        position:'relative', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: isMobile ? 'column':'row', 
        alignItems: 'center', 
        overflow: 'hidden',
      }} id="Home">
      <div 
        style={{
          flex: isMobile ? 0 : 2,
          background: '#1ED35F',
          height: '100%',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: isMobile ? 'space-between' : 'center',
          alignItems: 'center',
        }}>
        <img src={RobinStoreLogo} alt="Robin Store Logo on a Mobile Screen" 
          style={{
            position: 'absolute',
            top: isMobile ? '10px' : '20px',
            left: isMobile ? '20px' : '50px',
            width: '100px',
            height: '100px',
            scale: isMobile ? '0.8' : '1',
        }}/>
        <div 
          style={{
            width: '55%',
            textAlign: 'center',
            fontSize: isMobile ? '30px' : '50px',
            // color: 'linear-gradient(0, #FFFFFF, #EBEDEE)',
            color: 'white',
            fontFamily: 'Coolvetica',
            fontWeight: '400',
            position: 'relative',
            top: isMobile ? '160px' : '0px',
          }}>
          Your walk to the supermarket could be cheaper and easier. <br/>
          Just with a bit of help
        </div>
        <a style={{pointerEvents: isMobile ? 'all' : 'none'}} href='https://app.robinstore.gr'>
        <button
          style={{
            padding: isMobile ? '15px 20px' : '15px 35px',
            borderRadius: '10px',
            background: 'white',
            border: 'none',
            marginTop: '50px',
            fontSize: '20px',
            fontFamily: 'Coolvetica',
            fontWeight: '400',
            boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)',
            cursor: 'pointer',
            position: 'relative',
            top: isMobile ? '160px' : '0px',
          }}>
            {isMobile ? "Try RobinStore" : "Coming soon"}
        </button>
        </a>
        <img 
          style={{
            scale: isMobile ? '0.65' : '1',
            objectPosition: '0px 150px',
            display: isMobile ? 'flex' : 'none',
            pointerEvents: 'none',
          }}
          src={RobinMobile} alt="Robin Store Logo on a Mobile Screen">
        </img>
      </div>
      <div 
        style={{
          height: '100%',
          width: '100%',
          display: isMobile ? 'none' : 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          background: isMobile ? '#1ED35F' : 'white',
        }}>
        <img 
          style={{
            scale: isMobile ? '0.65' : '1',
          }}
          src={RobinMobile} alt="Robin Store Logo on a Mobile Screen">
        </img>
      </div>
    </div>
  )
}