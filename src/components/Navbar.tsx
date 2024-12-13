import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuthenticator((context) => [context.user]);
    const navigate = useNavigate();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = () => {
        if (!user) {
            navigate('/login'); // Redirect to login page
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Machine Learning Climbing Grader</div>
            <button className="navbar-toggle" onClick={toggleNavbar}>
                ☰
            </button>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                {/* //<li><Link to="/">Home</Link></li> */}
                <li><Link to="/about">About</Link></li>
                <li><Link to="/account">My Climbs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {user ? (
                    <li>
                        <button className="logout-button" onClick={() => console.log('Add signOut logic here')}>
                            Logout
                        </button>
                    </li>
                ) : (
                    <li>
                        <button className="login-button" onClick={handleLogin}>
                            Login
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
