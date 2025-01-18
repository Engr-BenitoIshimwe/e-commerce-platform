import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(state => state.user.user);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        {user ? (
          <span>{user.name}</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
