import React from "react";

const Country = ({ country }) => {
  return (
    <div className="header-text">
      <center>
        <h4>Data Pantauan COVID-19 Indonesia</h4>
        <i>
          Data:
          <a
            style={{ marginLeft: "3px" }}
            href="https://github.com/mathdroid/indonesia-covid-19-api"
            target="_blank"
          >
            mathdroid/indonesia-covid-19-api
          </a>
        </i>
        <br />
        <i>
          Code:
          <a
            style={{ marginLeft: "3px" }}
            href="https://github.com/thowwafi/covid-19-id"
            target="_blank"
          >
            thowwafi/covid-19-id
          </a>
        </i>
      </center>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center box-shadow">
              <div className="card-body">
                <h5 className="card-title">TOTAL: {country.jumlahKasus}</h5>
                <div className="card-subtitle mb-2 mr-3">
                  Perawatan: {country.perawatan}
                </div>
                <div className="card-subtitle mb-2 mr-3">
                  Sembuh: {country.sembuh}
                </div>
                <div className="card-subtitle mb-2 mr-3">
                  Meninggal: {country.meninggal}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
