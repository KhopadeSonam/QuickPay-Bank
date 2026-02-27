import React from 'react';
import { LayoutDashboard, CreditCard, Send, Wallet, Settings, Bell, Clock } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">QuickPay Bank</div>

            <div className="menu-section">
                <p className="menu-title">Main Menu</p>
                <ul className="menu-list">
                    <li className="menu-item">
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </li>
                    <li className="menu-item">
                        <CreditCard size={20} />
                        <span>My Cards</span>
                    </li>
                    <li className="menu-item">
                        <Send size={20} />
                        <span>Transfer</span>
                    </li>
                    <li className="menu-item">
                        <Wallet size={20} />
                        <span>Wallet</span>
                    </li>
                    <li className="menu-item">
                        <Settings size={20} />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>

            <div className="scheduled-section">
                <p className="menu-title">Scheduled Payment</p>
                <div className="scheduled-item">
                    <div className="status-dot" style={{ background: '#ffcc00' }}></div>
                    <span>Rent</span>
                </div>
                <div className="scheduled-item">
                    <div className="status-dot" style={{ background: '#ff4d4d' }}></div>
                    <span>Electricity</span>
                </div>
                <div className="scheduled-item">
                    <div className="status-dot" style={{ background: '#00cc66' }}></div>
                    <span>School Fees</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
