import React from 'react';

const BalanceSection = () => {
    return (
        <div className="balance-card">
            <p className="balance-title">Main Balance</p>
            <div className="balance-amount">$12,450.00</div>
            <p style={{ color: '#00cc66', fontSize: '14px', marginTop: '4px' }}>+15% from last month</p>
        </div>
    );
};

export default BalanceSection;
