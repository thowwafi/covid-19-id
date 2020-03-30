import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
  render() {
    return (
        <Contacts contacts={this.state.contacts} />
    )
  }

  state = {
      contacts: []
  };

  componentDidMount() {
    fetch('https://indonesia-covid-19-api.now.sh/api/provinsi')
      .then(res => res.json())
      .then((data) => {
          this.setState({ contacts: data.data })
      })
      .catch(console.log)
  }  
}

export default App;
