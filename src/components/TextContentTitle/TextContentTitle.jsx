import React from 'react';
import PropTypes from 'prop-types';
import './TextContentTitle.css';

export const TextContentTitle = ({ text, subtitle, className = '', ...props }) => {
    return (
        <div className={`text-content-title-wrapper ${className}`} {...props}>
            {subtitle && <p className="text-content-subtitle">{subtitle}</p>}
            <h2 className="text-content-title">{text}</h2>
        </div>
    );
};

TextContentTitle.propTypes = {
    text: PropTypes.string,
    subtitle: PropTypes.string,
    className: PropTypes.string,
};

TextContentTitle.defaultProps = {
    text: 'TEXT CONTENT TITLE',
    subtitle: '',
};
