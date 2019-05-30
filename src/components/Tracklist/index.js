import React from 'react';

class Tracklist extends React.Component {
    

    render(){
        const feature = this.props.feature;
        if (feature){
            return (
                <div className={`tracklist__track-${this.props.i}`}>
                    <div className="tracklist__track-title">{this.props.title} ft. {this.props.feature}</div>
                    <div className="tracklist__track-links">
                        <div className="tracklist__track-spotify">
                            <a href={this.props.spotify} target="_blank" rel="noopener noreferrer" >
                                <i className="fab fa-spotify"></i>
                            </a>
                        </div>
                        <div className="tracklist__track-apple">
                            <a href={this.props.apple} target="_blank" rel="noopener noreferrer" >
                                <i className="fab fa-apple"></i>
                            </a>
                        </div>
                        <div className="tracklist__track-tidal">tidal</div>
                    </div>
                </div>
            )
        }
        return (
            <div className={`tracklist__track-${this.props.i}`}>
                <div className="tracklist__track-title">{this.props.title}</div>
                <div className="tracklist__track-links">
                    <div className="tracklist__track-spotify">
                        <a href={this.props.spotify} target="_blank" rel="noopener noreferrer" >
                            <i className="fab fa-spotify"></i>
                        </a>
                    </div>
                    <div className="tracklist__track-apple">
                        <a href={this.props.apple} target="_blank" rel="noopener noreferrer" >
                            <i className="fab fa-apple"></i>
                        </a>
                    </div>
                    <div className="tracklist__track-tidal">tidal</div>
                </div>
            </div>
        )
    }
}

export default Tracklist;