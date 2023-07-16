import React from 'react'

export default function Avatar({ name, img }) {
  return (
    <div 
      style={{
        width: 200, 
        height: 300,
        top: 0, 
        display: 'flex',
        position: 'relative', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <img 
          style={{
            width: 200, 
            height: 200, 
            borderRadius: '50%', 
            boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)', 
            background: 'white',
            marginBottom: '2em',
          }} src={img} alt={name} />
        <div 
          style={{
            color: 'white', 
            fontSize: 28, 
            fontFamily: 'Coolvetica',
            fontWeight: '400', 
            wordWrap: 'break-word', 
            textAlign:'center'
          }}>{ name.split(' ')[0]} <br></br> {name.split(' ')[1]}
        </div>
    </div>
  )
}
