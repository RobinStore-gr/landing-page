import React from 'react'
import { isMobile } from 'react-device-detect';
import IconTile from './IconTile';

export default function WhatWeDo() {
  return (
    // <div style={{ position:'relative', height: '100vh', pointerEvents: 'none' }} id="WhatWeDo">
    //     <div style={{left: 0, top: 282, position: 'absolute', color: 'black', fontSize: 48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center', width: '100vw'}}>What we do</div>
    //     <div style={{left: 0, top: 445, position: 'absolute', color: 'black', fontSize: 48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center', width: '100vw'}}>placeholder</div>
    // </div>
    <section 
      style={{ 
        position:'relative', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
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
          gap: isMobile ? '1em' : '5em',
        }}>
        <IconTile icon="storefront" text="1. We collect product prices in real time from supermarkets"/>
        <IconTile icon="shopping_cart" text="2. You create a list of the products you want to buy"/>
        <IconTile icon="attach_money" text="3. We help you reduce the total amount you would pay "/>
      </div>
    </section>
  )
}
