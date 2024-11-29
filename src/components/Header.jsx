import React from 'react';
import './Header.css'; // Add optional styles here
import nrflogo from '../assets/nrflogo.png';


const Header = () => {
   
    return (
        <header className="header">
            <div className="header-left">
                <div className="brand">
                    <img src={nrflogo} alt="Logo" className="logo" />
                   </div>
            </div>
            {/* <div className="header-right">
                <div className="brand">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1>Robomiracle</h1>
                    
                </div>
            </div> */}
            
        </header>
        
    );
};

export default Header;
