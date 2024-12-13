// components/LoginCard.js
import React, { useState } from 'react';
import '../pages/style/LoginStyle.css';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
<div class= "button-group"> 
        <button type="submit" class="button">Login</button>
        <div class="space"></div>
        <button type="create-account" class="button">Create An Account</button>
</div>

      </form>
      
      
    </div>
  );
};

export default LoginCard;
