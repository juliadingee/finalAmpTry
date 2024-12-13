import React from 'react';
import '../pages/style/about.css';

const AboutPage: React.FC = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>This page contains information about our website.</p>

            {/* Profile Sections */}
            <div className="profile-section">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile 1"
                    className="profile-image"
                />
                <div className="profile-text">
                    <h2>Nadia</h2>
                    <p>Profile information</p>
                </div>
            </div>

            <div className="profile-section">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile 2"
                    className="profile-image"
                />
                <div className="profile-text">
                    <h2>Yousif</h2>
                    <p>Profile information</p>
                </div>
            </div>

            <div className="profile-section">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile 3"
                    className="profile-image"
                />
                <div className="profile-text">
                    <h2>Julia</h2>
                    <p>Profile information</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
