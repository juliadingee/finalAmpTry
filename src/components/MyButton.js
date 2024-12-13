// components/MyButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <button>
        {children}
      </button>
    </Link>
  );
}

export default MyButton;