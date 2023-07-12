import React from 'react'
import { isMobile } from 'react-device-detect'

export default function WhatWeDo() {
  return (
    <div style={{ position:'relative', height: '100vh', pointerEvents: 'none' }} id="WhatWeDo">
        <div style={{left: isMobile ? 0:243, top: 282, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center', width: '100vw'}}>What we do</div>
        <div style={{left: isMobile ? 0:243, top: 445, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign: 'center', width: '100vw'}}>placeholder</div>
    </div>
  )
}
