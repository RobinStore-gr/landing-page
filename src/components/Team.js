import React from 'react'
import { isMobile } from 'react-device-detect';

import Avatar from './Avatar'

export default function Team() {

    const team = [
        {
            name: 'Yiannis Hadjiyianni',
            img: 'https://avatars.githubusercontent.com/u/17935770?v=4'
        },
        {
            name: 'Andreas Ioannides',
            img: 'https://avatars.githubusercontent.com/u/17935770?v=4'
        },
        {
            name: 'Ntinos Papargyriou',
            img: 'https://avatars.githubusercontent.com/u/17935770?v=4'
        },
        {
            name: 'Nikolas Bellos',
            img: 'https://avatars.githubusercontent.com/u/17935770?v=4'
        },
    ]

    const avatars = team.map(({ name, img }, index) => <Avatar name={name} img={img} key={index} />)

    return (
    <div style={{ position:'relative', height: 'fit-content', pointerEvents: 'none'}} id="OurTeam">
        <div style={{left: isMobile ? 0:214, top: isMobile ? 0:180, position: isMobile ? 'relative':'absolute', color: 'black', fontSize: 48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>Our Team</div>
    
        <div style={{ 
            display: 'flex',
            position: 'relative',
            height: isMobile ? 'inherit':'100vh',
            top: '0',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: isMobile ? 'column' : 'row',
            marginTop: isMobile ? '2em' : '0',
         }}>
            {avatars}
        </div>

    </div>
  )
}
