import React from 'react';

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__chaos">混沌</div>
            <div className="landing__kids-see-ghosts">KIDS SEE GHOSTS</div>
            <ol className="landing__tracklist">
                <li className="landing__track-1">Feel The Love <span className="landing__track-1-ft">ft. Pusha T</span></li>
                <li className="landing__track-2">Fire</li>
                <li className="landing__track-3">4th Dimension <span className="landing__track-3-ft">ft. Louis Prima</span></li>
                <li className="landing__track-4">Freeee (Ghost Town, Pt. 2) <span className="landing__track-4-ft">ft. Ty Dolla Sign</span></li>
                <li className="landing__track-5">Reborn</li>
                <li className="landing__track-6">Kids See Ghosts <span>ft. Yasiin Bey</span></li>
                <li className="landing__track-7">Cudi Montage</li>
            </ol>
        </div>
    )
}

export default Landing;