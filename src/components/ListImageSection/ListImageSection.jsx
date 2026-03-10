import React from 'react';
import './ListImageSection.css';
import { Card } from '../Card/Card';

export const ListImageSection = ({
    subtitle = "The Salons",
    title = "AN OPEN TABLE FOR ACTIVE PRACTITIONERS",
    items = [],
    imageSrc = "https://placehold.co/600x800/2a2a2a/FFFFFF?text=Lantern+GIF+Placeholder",
    platform = 'Desktop'
}) => {
    const isMobile = platform === 'Mobile';

    return (
        <section className={`list-image-section ${isMobile ? 'list-image-section--mobile' : 'list-image-section--desktop'}`}>
            <header className="list-image-header">
                <h3 className="list-image-subtitle">{subtitle}</h3>
                <h2 className="list-image-title">{title}</h2>
            </header>

            <div className="list-image-content">
                <div className="list-image-steps">
                    {items.map((item, index) => {
                        // Format number to '01', '02', etc.
                        const displayNum = item.number || String(index + 1).padStart(2, '0');

                        return (
                            <div key={index} className="list-image-step">
                                <div className="list-image-step-number">
                                    {displayNum}
                                </div>
                                <Card {...item.cardProps} />
                            </div>
                        );
                    })}
                </div>

                <div className="list-image-media">
                    {imageSrc && (
                        <div className="list-image-layered-container">
                            <img src={imageSrc} alt="" className="list-image-layer layer-3" />
                            <img src={imageSrc} alt="" className="list-image-layer layer-2" />
                            <img src={imageSrc} alt="Section visual" className="list-image-layer layer-1" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
