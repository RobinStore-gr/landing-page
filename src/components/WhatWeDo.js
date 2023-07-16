import React from 'react'
import { isMobile } from 'react-device-detect';
import IconTile from './IconTile';

export default function WhatWeDo() {
  return (
    // <div style={{ position:'relative', height: '100vh', pointerEvents: 'none' }} id="WhatWeDo">
    //     <div style={{left: 0, top: 282, position: 'absolute', color: 'black', fontSize: 48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center', width: '100vw'}}>What we do</div>
    //     <div style={{left: 0, top: 445, position: 'absolute', color: 'black', fontSize: 48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center', width: '100vw'}}>placeholder</div>
    // </div>
    <div 
      style={{ 
        position:'relative', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }} id="Home">
      <div
        style={{
          height: '200px',
          position: 'absolute',
          top: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: '50px',
          color: 'black',
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
          alignItems: 'center',
        }}>
        <IconTile text="We collect product prices in real time from supermarkets"/>
        <IconTile text="You create a list of the products you want to buy"/>
        <IconTile text="We help you reduce the total amount you would pay "/>
      </div>
    </div>
  )
}
