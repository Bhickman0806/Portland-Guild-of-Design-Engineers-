import React from 'react';
import './LabeledCardGridSection.css';
import { TextContentTitle } from '../TextContentTitle/TextContentTitle';
import { NumberedCard } from '../NumberedCard/NumberedCard';

export const LabeledCardGridSection = ({ title, subtitle, cards }) => {
    return (
        <section className="labeled-card-grid-section">
            <div className="labeled-card-grid-section__header">
                <TextContentTitle
                    text={title}
                    subtitle={subtitle}
                />
            </div>
            <div className="labeled-card-grid-section__grid">
                {cards.map((card, index) => (
                    <NumberedCard
                        key={index}
                        number={String(index + 1).padStart(2, '0')}
                        title={card.title}
                        bodyText={card.bodyText}
                    />
                ))}
            </div>
        </section>
    );
};
