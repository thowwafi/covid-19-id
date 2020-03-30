import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Data per Provinsi</h1></center>            
            {contacts.map((contact) => (
                <div key={contact.id} className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">{contact.provinsi}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Positif:{contact.kasusPosi}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Sembuh:{contact.kasusSemb}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Meninggal{contact.kasusMeni}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts