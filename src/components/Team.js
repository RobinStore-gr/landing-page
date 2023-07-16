import React from 'react'
import { isMobile } from 'react-device-detect';

import Avatar from './Avatar'

export default function Team() {

    const team = [
        {
            name: 'Yiannis Hadjiyianni',
            img: 'https://2022.tedxntua.com/media/__sized__/team/%CE%B3%CE%B9%CE%B1%CE%BD%CE%BD%CE%B7%CF%82-thumbnail-320x320.png'
        },
        {
            name: 'Andreas Ioannides',
            img: 'https://media.licdn.com/dms/image/D4D03AQFL8R_rD3-L2w/profile-displayphoto-shrink_400_400/0/1682792876684?e=1695254400&v=beta&t=dy9UJqDWoqoGTfthi0iKs4lUCFpYNyUBCMp-wX0Wjv4'
        },
        {
            name: 'Ntinos Papargyriou',
            img: 'https://media.licdn.com/dms/image/D4D03AQEkJbHdcX_7VQ/profile-displayphoto-shrink_400_400/0/1684158557444?e=1695254400&v=beta&t=aW4JuIo0-8I5QaPU89QXSKVAl5BDX8c2XjLZEBNBQo0'
        },
        {
            name: 'Nikolas Bellos',
            img: 'https://media.licdn.com/dms/image/C4E03AQEymqKAjbZufA/profile-displayphoto-shrink_400_400/0/1620750118411?e=1695254400&v=beta&t=m8_DfQHM6cgNYTWP6e9pYHre9QAHSkTMF-vB2BhXqKg'
        },
    ]

    const avatars = team.map(({ name, img }, index) => <Avatar name={name} img={img} key={index} />)

    return (
        <div 
            style={{ 
                position:'relative', 
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: '0em 10em',
            }} id="OurTeam">
            <div
                style={{
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    textAlign: 'center',
                    fontSize: '50px',
                    color: 'black',
                    fontFamily: 'Coolvetica',
                    fontWeight: '400',
                    marginBottom: '0.5em',
                }}>Our Team
            </div>
            <div 
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#1ED35F',
                    borderRadius: '20px 20px 0px 0px',
                    boxShadow: '0px 0px 10px 0px rgba(50,50,50,0.35)',
                    gap: '2em',
                }}>
                {avatars}
            </div>
        </div>

    // <div style={{ position:'relative', height: 'fit-content', pointerEvents: 'none'}} id="OurTeam">
    //     <div style={{left: isMobile ? 0:214, top: isMobile ? 0:180, position: isMobile ? 'relative':'absolute', color: 'black', fontSize: 48, fontWeight: '700', wordWrap: 'break-word', textAlign: 'center'}}>Our Team</div>
    
    //     <div style={{ 
    //         display: 'flex',
    //         position: 'relative',
    //         height: isMobile ? 'inherit':'100vh',
    //         top: '0',
    //         alignItems: 'center',
    //         justifyContent: 'space-evenly',
    //         flexDirection: isMobile ? 'column' : 'row',
    //         marginTop: isMobile ? '2em' : '0',
    //      }}>
    //         {avatars}
    //     </div>

    // </div>
  )
}
