import React from "react";

export default function IconTile({ text }) {
    return (
        <div 
          style={{
            width: '250px',
            height: 'fit-content',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            display: 'inline-flex',
          }}>
          <img style={{width: '100px', height: '100px', borderRadius: '10px'}} src="https://via.placeholder.com/150x150" />
          <div 
            style={{
              width: '250px',
              textAlign: 'center',
              color: 'black',
              fontSize: '30px',
              fontFamily: 'Coolvetica',
              fontWeight: '400',
              wordWrap: 'break-word',
            }}>{text}
            </div>
        </div>
    )
}