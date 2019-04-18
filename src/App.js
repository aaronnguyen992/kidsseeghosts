import React from 'react';

import Landing from './pages/Landing';
import Cursor from './Cursor';
import './sass/main.scss';



class App extends React.Component {
  
  render(){
    return (
      <div className="main-page">
        <Cursor />
        <Landing />
      </div>
    );
  }
}

export default App;
