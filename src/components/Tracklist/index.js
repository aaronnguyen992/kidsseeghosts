import React from 'react';

class Tracklist extends React.Component {
    render(){
        const feature = this.props.feature;
        if (feature){
            return (
                <div className={`tracklist__track-${this.props.i}`}>
                    <div className="tracklist__track-title">{this.props.title} ft. {this.props.feature}</div>
                    <div className="tracklist__track-links">
                        <div className="tracklist__track-spotify"><i className="fab fa-spotify"></i></div>
                        <div className="tracklist__track-apple"><i className="fab fa-apple"></i></div>
                        <div className="tracklist__track-tidal">tidal</div>
                    </div>
                </div>
            )
        }
        return (
            <div className={`tracklist__track-${this.props.i}`}>
                {this.props.title} 
            </div>
        )
    }
}

export default Tracklist;