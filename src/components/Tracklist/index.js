import React from 'react';

class Tracklist extends React.Component {
    render(){
        return (
            <div className={`landing__track-${this.props.i}`}>
                {this.props.title}
            </div>
        )
        
    }
}

export default Tracklist;