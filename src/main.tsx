import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Authenticator } from '@aws-amplify/ui-react';

import './index.css';

import LandingPage from './pages/LandingPage';
import Account from './pages/Account';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App: React.FC = () => {
    return (
        <Authenticator>
            {({ user }) => (
                <Router>
                    <div className="app-container">
                        <Navbar />
                        <div className="main-content">
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route path="/account" element={user ? <Account /> : <LandingPage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </Router>
            )}
        </Authenticator>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
