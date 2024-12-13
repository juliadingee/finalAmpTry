import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage';

function RootComponent() {
    const [showLandingPage, setShowLandingPage] = useState(true);

    const handleLogin = () => {
        setShowLandingPage(false); // Hide the landing page when login is triggered
    };

    return showLandingPage ? (
        <LandingPage onLogin={handleLogin} />
    ) : (
        <div>Authenticated App Component Here</div>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RootComponent />
    </React.StrictMode>
);
