import React from 'react'

// import RobinStoreLogo from '../assets/robin-logo-white-512.png';
import RobinStoreLogo from '../assets/logo-white-transparent.png';
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
          flex: isMobile ? 1 : 2,
          // background: '#1DB954',
          background: 'linear-gradient(0, #41e17a,#1aa34a, #1DB954)',
          height: '100%',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: isMobile ? 'start' : 'center',
          alignItems: 'center',
          paddingTop: isMobile ? '18vh' : '0',
        }}>
        <div style={{
          position: 'absolute',
          top: isMobile ? '10px' : '20px',
          left: isMobile ? '0px' : '50px',
          scale: isMobile ? '0.6' : '1',
          height: '100px',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
          <img src={RobinStoreLogo} alt="Robin Store Logo on a Mobile Screen" 
            style={{
              // position: 'absolute',
              // top: isMobile ? '10px' : '20px',
              // left: isMobile ? '20px' : '50px',
              width: '100px',
              height: '100px',
              paddingRight: '20px',
              // scale: isMobile ? '0.8' : '1',
          }}/>
          <span
            style={{
              width: '70%',
              textAlign: 'center',
              fontSize: isMobile ? '50px' : '50px',
              color: 'white',
              fontFamily: 'Coolvetica',
              fontWeight: '400',
            }}>
              RobinStore
          </span>
        </div>
        <div 
          style={{
            width: '70%',
            textAlign: 'center',
            fontSize: isMobile ? '30px' : '50px',
            // color: 'linear-gradient(0, #FFFFFF, #EBEDEE)',
            color: 'white',
            fontFamily: 'Coolvetica',
            fontWeight: '400',
            // position: 'relative',
            // top: isMobile ? '160px' : '0px',
          }}>
          Your walk to the supermarket could be <span style={{color: 'black'}}>Cheaper</span> and <span style={{color: 'black'}}>Easier</span>. <br/>
        </div>
        {/* <a style={{pointerEvents: isMobile ? 'all' : 'none'}} href='https://app.robinstore.gr'> */}
        <a href='https://forms.gle/rZbi6P6uPjihhTq49'>
          <button
            style={{
              padding: isMobile ? '15px 20px' : '15px 35px',
              borderRadius: '10px',
              background: 'white',
              border: 'none',
              marginTop: '4vh',
              fontSize: '20px',
              fontFamily: 'Coolvetica',
              fontWeight: '400',
              boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)',
              cursor: 'pointer',
              // position: 'relative',
              // top: isMobile ? '160px' : '0px',
            }}>
              {/* {isMobile ? "Try RobinStore" : "Coming soon"} */}
              {isMobile ? "Join Waitlist 😊" : "Join Waitlist 😊"}
          </button>
        </a>
        <img 
          style={{
            position: 'absolute',
            bottom: '-100px',
            scale: isMobile ? '0.65' : '1',
            objectPosition: '0px 150px',
            display: isMobile ? 'flex' : 'none',
            pointerEvents: 'none',
            overflow: 'visible',
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
          background: isMobile ? '#1DB954' : 'white',
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