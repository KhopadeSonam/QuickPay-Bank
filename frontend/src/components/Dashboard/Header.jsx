import React from 'react';
import { Search, Bell, Mail } from 'lucide-react';

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    return (
        <header className="dashboard-header">
            <div className="welcome-text">
                <h1>Welcome Back {user?.firstName || "User"} 👋</h1>
            </div>

            <div className="header-right">
                <input type="text" className="search-bar" placeholder="Search for anything..." />

                <div className="header-icons">
                    <Bell size={20} style={{ cursor: 'pointer' }} />
                    <Mail size={20} style={{ cursor: 'pointer' }} />
                </div>

                <div className="profile-area">
                    <div className="profile-pic"></div>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>
                        {user?.firstName} {user?.lastName}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
