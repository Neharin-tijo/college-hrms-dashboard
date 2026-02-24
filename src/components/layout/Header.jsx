import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = ({ title, isMobile }) => {
  return (
    <header className="header">
      <h1 className="page-title">{title}</h1>
      <div className="header-icons">
        {!isMobile && <Search className="icon" />}
        <Bell className="icon" />
        <div className="profile-icon">
          {isMobile ? 'HR' : 'HR'}
        </div>
      </div>
    </header>
  );
};

export default Header;