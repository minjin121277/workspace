import React from 'react';
import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <header>
      <div className="storybook-header">
        <h1>Acme</h1>
        <div>
          {user ? (
            <Button size="small" onClick={onLogout} label="Log out" />
          ) : (
            <Button size="small" onClick={onLogin} label="Log in" />
          )}
          <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
        </div>
      </div>
    </header>
  );
};
