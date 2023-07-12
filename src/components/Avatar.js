import React from 'react'
import { isMobile } from 'react-device-detect';

export default function Avatar({ name, img }) {
  return (
    <div style={{width: 230, height: 'fit-content', top: 0, position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: 29, display: 'inline-flex', margin: '2em'}}>
        <img style={{width: 230, height: 230, borderRadius: 9999}} src={img} alt={name} />
        <div style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', textAlign:'center'}}>{ name }</div>
    </div>
  )
}
