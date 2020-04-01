import React from 'react'

const Provinces = ({provinces}) => {
    return (
        <div className="header-text">
            <center><h1>Data per Provinsi</h1></center>            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {provinces.map((province) => (
                            <div key={province.id} className="card text-center mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{province.provinsi}</h5>
                                    <span className="card-subtitle mb-2 mr-3">Positif: {province.kasusPosi}</span>
                                    <span className="card-subtitle mb-2 mr-3">Sembuh: {province.kasusSemb}</span>
                                    <span className="card-subtitle mb-2 mr-3">Meninggal: {province.kasusMeni}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Provinces