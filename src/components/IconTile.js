import React from "react";
import { isMobile } from "react-device-detect";

export default function IconTile({ icon, text }) {
    return (
        <div 
          style={{
            width: '25em',
            height: '20em',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            fontSize: isMobile ? '10px' : '15px',
          }}>
            <div 
                style={{
                    height: '50%',
                    backgroundColor: 'white',
                }}>
                <i class="material-icons" 
                    style={{
                        backgroundColor: "black",
                        padding: "20px",
                        borderRadius: "10px",
                        color: "#1DB954", 
                        fontSize: "3.5em"
                    }}>{icon}
                </i>
            </div>
            <div 
                style={{
                // width: '8em',
                height: '50%',
                textAlign: 'center',
                color: 'black',
                fontSize: isMobile ? '23px' : '30px',
                fontFamily: 'Coolvetica',
                fontWeight: '400',
                wordWrap: 'break-word',
                }}>{text}
            </div>
        </div>
    )
}