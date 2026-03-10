import React from 'react';
import PropTypes from 'prop-types';
import './TextContentHeading.css';

export const TextContentHeading = ({ text, subtitle, className = '', ...props }) => {
    return (
        <div className={`text-content-heading-wrapper ${className}`} {...props}>
            {subtitle && <p className="text-content-heading-subtitle">{subtitle}</p>}
            <h3 className="text-content-heading">{text}</h3>
        </div>
    );
};

TextContentHeading.propTypes = {
    text: PropTypes.string,
    subtitle: PropTypes.string,
    className: PropTypes.string,
};

TextContentHeading.defaultProps = {
    text: 'Text Content Heading',
    subtitle: '',
};
