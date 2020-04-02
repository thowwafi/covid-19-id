import React from "react";

const Provinces = ({ provinces }) => {
  return (
    <div className="header-text">
      <center>
        <h1>Data per Provinsi</h1>
      </center>
      <div className="container">
        <div className="row">
          {provinces.map(province => (
            <div className="col-xs-12 col-md-3">
              <div key={province.id} className="card mb-3 box-shadow">
                <div className="card-body">
                  <h6 className="card-title">{province.provinsi}</h6>
                  <div className="card-subtitle mb-2 mr-3">
                    Positif: {province.kasusPosi}
                  </div>
                  <div className="card-subtitle mb-2 mr-3">
                    Sembuh: {province.kasusSemb}
                  </div>
                  <div className="card-subtitle mb-2 mr-3">
                    Meninggal: {province.kasusMeni}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provinces;
