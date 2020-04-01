import React from 'react'

const Country = ({country}) => {
    return (
        <div className="header-text">
            <center><h1>Data se-Indonesia</h1></center>            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">TOTAL:{country.jumlahKasus}</h5>
                                <span className="card-subtitle mb-2 mr-3">Positif: {country.perawatan}</span>
                                <span className="card-subtitle mb-2 mr-3">Sembuh: {country.sembuh}</span>
                                <span className="card-subtitle mb-2 mr-3">Meninggal: {country.meninggal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Country