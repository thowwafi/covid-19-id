import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="header-text">
            <div className="footer">
                <nav className="navbar fixed-bottom navbar-light bg-dark">
                    <a className="navbar-brand" href="/"><Link to='/'>Home</Link></a>
                    <a className="navbar-brand" href="/"><Link to='/chart'>Chart</Link></a>
                    <a className="navbar-brand" href="/"><Link to='/about'>Tentang</Link></a>
                </nav>
            </div>
        </div>
    )
};

export default Footer