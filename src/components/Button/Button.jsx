import React from 'react';
import './Button.css';

export const Button = ({
    children,
    iconStart,
    iconEnd,
    onClick,
    className = '',
    ...props
}) => {
    return (
        <button
            type="button"
            className={`btn-subtle ${className}`}
            onClick={onClick}
            {...props}
        >
            {iconStart && <span className="btn-icon">{iconStart}</span>}
            <span className="btn-label">{children}</span>
            {iconEnd && <span className="btn-icon">{iconEnd}</span>}
        </button>
    );
};
