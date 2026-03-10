import React from 'react';
import './Card.css';
import { Button } from '../Button/Button.jsx';

// Dummy Icon Component for Default Asset
const DefaultIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8L12.01 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Dummy Star Icon for Button
const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1L10.163 5.378L15 6.082L11.5 9.5L12.326 14.326L8 12.05L3.674 14.326L4.5 9.5L1 6.082L5.837 5.378L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const Card = ({
    assetType = 'Icon',     // 'Icon' | 'Image'
    variant = 'Stroke',     // 'Stroke' | 'Default'
    direction = 'Horizontal', // 'Horizontal' | 'Vertical'
    title = 'Title',
    bodyText = 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    showAsset = true,
    showButton = true,
    icon,
    className = '',
    ...props
}) => {
    const cardClasses = `card card-${variant.toLowerCase()} card-${direction.toLowerCase()} ${className}`;

    return (
        <div className={cardClasses} {...props}>
            {showAsset && (
                <div className={`card-asset card-asset-${assetType.toLowerCase()}`}>
                    {assetType === 'Icon' ? (
                        <div className="card-icon-container">
                            {icon ? (
                                React.isValidElement(icon) ? icon : React.createElement(icon)
                            ) : <DefaultIcon />}
                        </div>
                    ) : (
                        <div className="card-image-placeholder"></div>
                    )}
                </div>
            )}

            <div className="card-body">
                <div className="card-text-group">
                    {title && <h3 className="card-title">{title}</h3>}
                    {bodyText && <p className="card-text">{bodyText}</p>}
                </div>

                {showButton && (
                    <div className="card-button-group">
                        <Button iconStart={<StarIcon />}>Button</Button>
                        <Button iconStart={<StarIcon />}>Button</Button>
                    </div>
                )}
            </div>
        </div>
    );
};
