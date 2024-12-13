// components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [issue, setIssue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Construct the mailto link
        const subject = `Support Request from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AIssue: ${issue}`;
        const mailtoLink = `mailto:mlclimb33@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open mail client with the constructed mailto link
        window.location.href = mailtoLink;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="issue">Issue:</label>
            <textarea
                id="issue"
                name="issue"
                rows={4}
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
            ></textarea>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
