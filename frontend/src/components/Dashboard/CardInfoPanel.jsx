import React from 'react';
import { CreditCard } from 'lucide-react';

const CardInfoPanel = () => {
    return (
        <div className="card-info-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <p className="panel-title">My Card</p>
                <CreditCard size={20} />
            </div>

            <div style={{ margin: '20px 0' }}>
                <p style={{ letterSpacing: '2px', fontSize: '18px' }}>**** **** **** 4560</p>
            </div>

            <p className="panel-title" style={{ marginTop: '20px' }}>Total Balance</p>
            <div className="panel-amount">$5,200.00</div>

            <button className="top-up-btn">Top Up</button>
        </div>
    );
};

export default CardInfoPanel;
