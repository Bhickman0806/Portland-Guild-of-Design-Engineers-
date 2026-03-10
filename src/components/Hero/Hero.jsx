import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card/Card.jsx';
import './Hero.css';

export const Hero = ({ title, cards, platform }) => {
    const isMobile = platform === 'Mobile';
    const heroClass = `hero ${isMobile ? 'hero-mobile' : 'hero-desktop'}`;

    return (
        <section className={heroClass}>
            {/* Background Video */}
            <video
                className="hero-video-bg"
                autoPlay
                loop
                muted
                playsInline
                src="/pGDEheroSectionBackPlate.mp4"
            />
            {/* Overlay to ensure text legibility if needed */}
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <div className="hero-cards-container">
                    {cards && cards.map((cardProps, index) => (
                        <Card key={index} {...cardProps} />
                    ))}
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
    platform: PropTypes.oneOf(['Desktop', 'Mobile']),
};

Hero.defaultProps = {
    title: 'PORTLAND GUILD OF DESIGN ENGINEERS',
    cards: [],
    platform: 'Desktop',
};
