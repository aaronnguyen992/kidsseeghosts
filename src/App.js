import React from 'react';
import TweenMax from 'gsap/TweenMax';
import Landing from './pages/Landing';

import './sass/main.scss';

var cursor, follower;
var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

class App extends React.Component {
  constructor(props){
    super(props);

    this.animateCursor = this.animateCursor.bind(this);
   
  }

  componentDidMount() {
    cursor = document.querySelector('.cursor');
    follower = document.querySelector('.cursor-follower');

    window.addEventListener("mousemove", e => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    this.animateCursor();

    console.log(cursor);
  }

  animateCursor() {
    
    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 5;
        posY += (mouseY - posY) / 5;
        
        TweenMax.set(follower, {
            css: {    
            left: posX - 18,
            top: posY - 18
            }
        });
        
        TweenMax.set(cursor, {
            css: {    
            left: mouseX,
            top: mouseY
            }
        });
      }
    });
  }

  render(){
    return (
      <div className="main-page">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
        <Landing />
      </div>
    );
  }
}

export default App;
