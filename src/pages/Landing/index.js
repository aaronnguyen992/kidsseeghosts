import React from 'react';

import Tracklist from '../../components/Tracklist';
import tracklist from '../../components/Tracklist/tracklist.json';

class Landing extends React.Component {

    componentDidMount() {    
        this.animateBlur();
    }

    

    animateBlur(){
        const album = document.querySelector('.landing__album');
        const maskElement = document.querySelector('#mask1 circle');
        
        album.addEventListener("mousemove", event => {
            let upX = event.clientX;
            let upY = event.clientY;
            let mask = maskElement;
            mask.setAttribute("cy", (upY));
            mask.setAttribute("cx", (upX));
        })
        
    }
    render(){
        return (
            <div className="landing">
                <div className="landing__chaos">混沌</div>
                <div className="landing__kids-see-ghosts">KIDS SEE GHOSTS</div>
                <div className="landing__album">
                    <svg className='landing__album--blur' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width="100%">
                        <image filter='url(#filter2)' width='100%' height='100%' />
                        <filter id='filter2'>
                            <feGaussianBlur stdDeviation='5' />
                        </filter>
                        <mask id='mask1'>
                            <circle cx='0' cy='0' r='75' fill='#fff' filter='url(#filter2)'/>
                        </mask>
                        <image className="landing__album--art" xlinkHref="/assets/AlbumCover.jpg" alt="Album Cover" width="100%" height="90%" mask='url(#mask1)' />
                    </svg>
                </div>
                <div className="landing__tracklist">
                {
                    tracklist.map((track, i) => (
                        <Tracklist 
                            title={track.title}
                            feature={track.feature}
                            spotify={track.spotify}
                            apple={track.apple}
                            tidal={track.tidal}
                            google={track.google}
                            key={track.title}
                            i={i}
                        />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Landing;