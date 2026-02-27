import React from 'react';
import { Landmark, ArrowRightLeft, CreditCard, Wallet } from 'lucide-react';

const ActionCards = () => {
    const actions = [
        { title: "Transfer to same bank", icon: <Landmark size={24} /> },
        { title: "Transfer to another bank", icon: <ArrowRightLeft size={24} /> },
        { title: "Transfer to card number", icon: <CreditCard size={24} /> },
        { title: "Transfer to wallet", icon: <Wallet size={24} /> }
    ];

    return (
        <div className="action-cards-row">
            {actions.map((action, index) => (
                <div key={index} className="action-card">
                    {action.icon}
                    <span>{action.title}</span>
                </div>
            ))}
        </div>
    );
};

export default ActionCards;
