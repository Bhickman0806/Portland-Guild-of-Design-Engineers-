import React from 'react';
import './NumberedCard.css';

export const NumberedCard = ({
    number = '01',          // The number to display
    title = 'TITLE',
    bodyText = 'You must be currently shipping production UI. Management tracks do not qualify.',
    className = '',
    ...props
}) => {
    return (
        <div className={`numbered-card ${className}`} {...props}>
            <div className="numbered-card-number">
                {number}
            </div>
            {title && <h3 className="numbered-card-title">{title}</h3>}
            {bodyText && <p className="numbered-card-text">{bodyText}</p>}
        </div>
    );
};
