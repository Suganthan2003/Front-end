import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import DisplayData from './components/DisplayData';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/filtered-data" element={<DisplayData />} />
                    </Routes>
                </div>
                <Navbar />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
