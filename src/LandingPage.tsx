import React from 'react';
import './pages/style/LandingPage.css';

import WallImage from '../public/wallA.jpeg';

interface LandingPageProps {
    onLogin: () => void; // Define the onLogin prop
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
    return (
        <>
            {/* Section 1 - Full-Width Image with Text Below */}
            <div className="section">
                <div className="image-container">
                    <img src={WallImage} alt="Wall A" className="full-width-image" />
                </div>
                <div className="text-container">
                    <h2>Welcome to ClimbAI: Your Personal Boulder Grading Assistant</h2>
                    <p>Revolutionizing climbing with cutting-edge AI technology.</p>
                </div>
            </div>
            
            {/* Section 2 - Full-Width Image with Text Below */}
            <div className="section">
                <div className="image-container">
                    <img src={WallImage} alt="Wall A" className="full-width-image" />
                </div>
                <div className="text-container">
                    <h2>Analyze Your Climb Like Never Before</h2>
                    <p>
                        ClimbAI leverages advanced machine learning algorithms to assess bouldering routes and provide accurate difficulty grades. 
                        Whether you're a beginner or a seasoned climber, our platform gives you insights to refine your skills and tackle new challenges.
                    </p>
                </div>
            </div>
            
            {/* Section 3 - Full-Width Image with Text Below */}
            <div className="section">
                <div className="image-container">
                    <img src={WallImage} alt="Wall A" className="full-width-image" />
                </div>
                <div className="text-container">
                    <h2>Why Choose ClimbAI?</h2>
                    <div>
                        <ul>
                            <li>Save time by skipping subjective grading debates.</li>
                            <li>Improve your climbing skills with data-driven insights.</li>
                            <li>Explore a library of community-graded boulder problems.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Login Button */}
            <div className="button-container">
                <button onClick={onLogin} className="login-button">Login</button>
            </div>
        </>
    );
};

export default LandingPage;
