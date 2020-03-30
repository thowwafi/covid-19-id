import React, { Component } from 'react';
import Provinces from './components/provinces.jsx';

class App extends Component {
  render() {
    return (
        <Provinces provinces={this.state.provinces} />
    )
  }

  state = {
      provinces: []
  };

  componentDidMount() {
    fetch('https://indonesia-covid-19-api.now.sh/api/provinsi')
      .then(res => res.json())
      .then((data) => {
          this.setState({ provinces: data.data })
      })
      .catch(console.log)
  }  
}

export default App;
