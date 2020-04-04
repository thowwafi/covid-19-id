import React, { useState } from "react";
import SearchBar from "./SearchBar";

const Provinces = ({ provinces }) => {
  const [searchText, setSearchText] = useState("");
  const showCurrentProvinces = provinces.filter(province => {
    return province.provinsi.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div className="header-text mt-3">
      <div className="container">
        <SearchBar
          search={searchText}
          setSearch={setSearchText}
          placeholder="Cari Provinsi..."
        />
        <div className="row">
          {showCurrentProvinces.map(province => (
            <div className="col-xs-12 col-md-3">
              <div key={province.id} className="card mb-3 box-shadow">
                <div className="card-body">
                  <h6 className="card-title">
                    {province.provinsi}
                    {province.provinsi === "Indonesia" ? (
                      <small
                        style={{
                          fontSize: "12px",
                          color: "#000",
                          marginLeft: "5px"
                        }}
                      >
                        (Belum ada informasi lokasi)
                      </small>
                    ) : (
                      <i></i>
                    )}
                  </h6>
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
