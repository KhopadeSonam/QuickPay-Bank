import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/Header';
import ActionCards from '../components/Dashboard/ActionCards';
import BalanceSection from '../components/Dashboard/BalanceSection';
import CardInfoPanel from '../components/Dashboard/CardInfoPanel';
import ActivityChart from '../components/Dashboard/ActivityChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <main className="main-content">
                <Header />

                <ActionCards />

                <div className="metrics-grid">
                    <div className="left-panel">
                        <BalanceSection />
                        <ActivityChart />
                    </div>

                    <div className="right-panel">
                        <CardInfoPanel />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
