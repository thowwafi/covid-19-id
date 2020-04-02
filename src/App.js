import React, { Component } from 'react';
import Provinces from './components/provinces.js';
import Country from './components/country.js';
import Footer from './components/footer.js';
class App extends Component {
  render() {
    return (
        <div>
          <Country country={this.state.country}></Country>
          <Provinces provinces={this.state.provinces}></Provinces>
          <Footer></Footer>
        </div>
    )
  }

  state = {
      provinces: [],
      country: []
  };

  componentDidMount() {
    fetch('https://indonesia-covid-19-api.now.sh/api')
      .then(res => res.json())
      .then((data) => {
          this.setState({ country: data })
      })
      .catch(console.log)
  
    fetch('https://indonesia-covid-19-api.now.sh/api/provinsi')
      .then(res => res.json())
      .then((data) => {
          this.setState({ provinces: data.data })
      })
      .catch(console.log)
  }  
}

export default App;
