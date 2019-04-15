import React from 'react';

class Tracklist extends React.Component {
    render(){
        return (
            <div className="landing__tracklist">
                <div className={`landing__track-${this.props.i}`}>
                    {this.props.title}
                </div>
            </div>
        )
        
    }
}

export default Tracklist;