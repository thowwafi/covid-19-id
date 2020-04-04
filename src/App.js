import React, { Component, useState, useEffect } from "react";
import Provinces from "./components/provinces.js";
import Country from "./components/country.js";
import Footer from "./components/footer.js";
import SearchBar from "./components/SearchBar.js";
import AddToHomescreen from "react-add-to-homescreen";

export default function NewApp() {
  const [country, setCountry] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    fetch("https://indonesia-covid-19-api.now.sh/api")
      .then(res => res.json())
      .then(data => {
        setCountry(data);
        // this.setState({ country: data });
      })
      .catch(console.log);

    fetch("https://indonesia-covid-19-api.now.sh/api/provinsi")
      .then(res => res.json())
      .then(data => {
        setProvinces(data.data);
        // this.setState({ provinces: data.data });
      })
      .catch(console.log);
  }, []);

  return (
    <div style={{ marginTop: "4em" }}>
      <Country country={country}></Country>

      <Provinces provinces={provinces}></Provinces>
    </div>
  );
}

// react jaman old

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Country country={this.state.country}></Country>
//         <SearchBar search="" setSearch={} />
//         <Provinces provinces={this.state.provinces}></Provinces>
//       </div>
//     );
//   }

//   state = {
//     provinces: [],
//     country: []
//   };

//   componentDidMount() {
//     fetch("https://indonesia-covid-19-api.now.sh/api")
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ country: data });
//       })
//       .catch(console.log);

//     fetch("https://indonesia-covid-19-api.now.sh/api/provinsi")
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ provinces: data.data });
//       })
//       .catch(console.log);
//   }
// }

// export default App;
