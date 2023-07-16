import React from 'react'
import { isMobile } from 'react-device-detect';

export default function Avatar({ name, img }) {
  return (
    <div 
      style={{
        // width: '10em', 
        height: '20em',
        top: 0, 
        display: 'flex',
        position: 'relative', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '2em',
        fontSize: isMobile ? '10px' : '15px',
      }}>
        <img 
          style={{
            width: isMobile ? 120 : 200, 
            height: isMobile ? 120 : 200, 
            borderRadius: '50%', 
            boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)', 
            background: 'white',
            marginBottom: '2em',
          }} src={img} alt={name} />
        <div 
          style={{
            color: 'white', 
            fontSize: isMobile ? 22 : 25, 
            fontFamily: 'Coolvetica',
            fontWeight: '400', 
            wordWrap: 'break-word', 
            textAlign:'center'
          }}>{ name.split(' ')[0]} {isMobile ?  ' ' : <br></br>} {name.split(' ')[1]}
        </div>
    </div>
  )
}
