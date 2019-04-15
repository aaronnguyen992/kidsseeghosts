import React from 'react';

import Tracklist from '../../components/Tracklist';
import tracklist from '../../components/Tracklist/tracklist.json';

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__chaos">混沌</div>
            <div className="landing__kids-see-ghosts">KIDS SEE GHOSTS</div>
            <div>
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

export default Landing;