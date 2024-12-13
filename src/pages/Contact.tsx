import React from 'react';
import './style/ContactPage.css';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
    return (
        <div className="space">
            <h1>Contact Us</h1>
            <p>
                Have any issues or feedback you would like to report? Please feel free to reach out to us through the form below.
            </p>

            {/* Contact Form Section */}
            <div className="contact-form">
                <h2>Submit an Issue</h2>
                <ContactForm />
            </div>

            {/* Developer Contact Information */}
            <div className="contact-info">
                <h2>Developer Contact Information</h2>
                <p>
                    <strong>Email:</strong> developer@example.com
                </p>
                <p>
                    <strong>Phone:</strong> (123) 867-5309
                </p>
            </div>

            {/* Social Media Links */}
            <div className="social-media">
                <h2>Follow Us</h2>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default ContactPage;
