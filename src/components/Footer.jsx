import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Replace with the actual path to your left-side logo
import nrf from '../assets/nrf.png'; // Replace with the actual path to your right-side logo

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section footer-left">
                <img src={nrf} alt="Left Logo" className="footer-logo" />
                <p>10, Ground Floor, US Complex, Opp. Apollo Hospital, New Delhi-110076</p>
            </div>
            <div className="footer-section footer-right">
                <img src={logo} alt="Right Logo" className="footer-logo" />
                <p>196, Second floor, Robomiracle Technologies,Tulasi Chambers, Thiruvenkatasamy Rd W, R.S. Puram, Coimbatore, Tamil Nadu 641002</p>
            </div>
        </footer>
    );
};

export default Footer;
