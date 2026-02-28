import { Search, Bell, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const navigate = useNavigate();

    const initials = user ? `${user.firstName?.charAt(0) || ''}${user.lastName?.charAt(0) || ''}`.toUpperCase() : "U";

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

                <div className="profile-area" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                    <div className="profile-pic" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: 'white',
                        background: '#2F5BEA'
                    }}>
                        {initials}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>{user ? `${user.firstName} ${user.lastName}` : "User"}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
