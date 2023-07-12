import React from 'react'
import { isMobile } from 'react-device-detect';

function scrollToComponent(id) {
    console.log(1)
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

const Sc = (id) => () => scrollToComponent(id);

export default function Header() {
  return (
    <div style={{width: '100vw', height: 27, top: 23, justifyContent: 'center', alignItems: 'flex-start', gap: isMobile ? 20:230, display: 'inline-flex', position: 'fixed', zIndex: 1}}>
          <div style={{color: 'white', fontSize: 22, fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer', textShadow: '1px 1px black'}} onClick={Sc('Home')} >Home</div>
          <div style={{color: 'white', fontSize: 22, fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer', textShadow: '1px 1px black'}} onClick={Sc('WhatWeDo')} >What we do</div>
          <div style={{color: 'white', fontSize: 22, fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer', textShadow: '1px 1px black'}} onClick={Sc('OurTeam')} >Our Team</div>
    </div>
  )
}
