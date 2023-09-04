import React from 'react'
import { isMobile } from 'react-device-detect';
import IconTile from './IconTile';
import RobinStoreLogo from '../assets/logo-color-transparent.png';
import Step1 from '../assets/step-1.png';
import Step2 from '../assets/step-2.png';
import Step3 from '../assets/step-3.png';
import Step4 from '../assets/step-4.png';

export default function WhatWeDo() {
  return (
    // <div style={{ position:'relative', height: '100vh', pointerEvents: 'none' }} id="WhatWeDo">
    //     <div style={{left: 0, top: 282, position: 'absolute', color: 'black', fontSize: 48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center', width: '100vw'}}>What we do</div>
    //     <div style={{left: 0, top: 445, position: 'absolute', color: 'black', fontSize: 48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center', width: '100vw'}}>placeholder</div>
    // </div>
    <section 
      style={{ 
        position:'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        paddingBottom: isMobile ? '0px' : '200px',
      }} id="Home">
      <div
        style={{
          height: isMobile ? '150px' : '250px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: '50px',
          color: '#1DB954',
          fontFamily: 'Coolvetica',
          fontWeight: '400',
        }}>What We do
      </div>
      <div 
        style={{
          height: '100%',
          width: '80%',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-evenly',
          alignItems: 'start',
          flexWrap: 'wrap',
          gap: isMobile ? '2em' : '3em',
        }}>
        <img src={Step1} alt="Robin Store Logo on a Mobile Screen" 
          style={{
            width: isMobile? '300px' : '500px',
            boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)',
            borderRadius: '10px',
        }}/>
        <img src={Step2} alt="Robin Store Logo on a Mobile Screen" 
          style={{
            width: isMobile? '300px' : '500px',
            boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)',
            position: 'relative',
            top: isMobile ? '0px' : '100px',
            borderRadius: '10px',
        }}/>
        <img src={Step3} alt="Robin Store Logo on a Mobile Screen" 
          style={{
            width: isMobile? '300px' : '500px',
            boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)',
            position: 'relative',
            borderRadius: '10px',
        }}/>
        <img src={Step4} alt="Robin Store Logo on a Mobile Screen" 
          style={{
            width: isMobile? '300px' : '500px',
            boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)',
            position: 'relative',
            top: isMobile ? '0px' : '150px',
            borderRadius: '10px',
        }}/>
        {/* <IconTile icon="storefront" text="1. We collect product prices in real time from supermarkets"/> */}
        {/* <IconTile icon="shopping_cart" text="2. You create a list of the products you want to buy"/> */}
        {/* <IconTile icon="attach_money" text="3. We help you reduce the total amount you would pay "/> */}
      </div>
    </section>
  )
}
