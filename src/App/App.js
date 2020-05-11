import React from 'react';
import './App.scss';
import goatData from './helpers/data/goatData';

class App extends React.Component {
  // outside render - anything that modifies state

  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats', goats);
  }

  render() {
    // inside render - anything we need to do to modify UI
    return (
      <div className="App">
        <h1>Goats</h1>
        <button className="btn btn-info">Button things</button>
      </div>
    );
  }
}

export default App;
