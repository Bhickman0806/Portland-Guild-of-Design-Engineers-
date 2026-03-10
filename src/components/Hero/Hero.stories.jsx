import React from 'react';
import { Hero } from './Hero.jsx';

export default {
    title: 'Components/Hero',
    component: Hero,
    parameters: {
        layout: 'fullscreen',
    },
};

const CodeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const MessageCircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const EyeOffIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
        <line x1="2" y1="2" x2="22" y2="22"></line>
    </svg>
);

const defaultCards = [
    {
        assetType: 'Icon',
        variant: 'Default',
        direction: 'Horizontal',
        title: 'For Design Engineers',
        bodyText: 'These are career practitioners who bridge the gap between interface design and production-ready code.',
        showButton: false,
        showAsset: true,
        icon: <CodeIcon />,
    },
    {
        assetType: 'Icon',
        variant: 'Default',
        direction: 'Horizontal',
        title: 'For Creative Developers',
        bodyText: 'Experts in WebGL, Three.js, and pushing the boundaries of interactive web experiences.',
        showButton: false,
        showAsset: true,
        icon: <MessageCircleIcon />,
    },
    {
        assetType: 'Icon',
        variant: 'Default',
        direction: 'Horizontal',
        title: 'For UI Engineers',
        bodyText: 'Specialists in building robust, accessible, and performant component libraries.',
        showButton: false,
        showAsset: true,
        icon: <EyeOffIcon />,
    }
];

const Template = (args) => <Hero {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
    title: 'PORTLAND GUILD OF DESIGN ENGINEERS',
    cards: defaultCards,
    platform: 'Desktop',
};

export const Mobile = Template.bind({});
Mobile.args = {
    title: 'PORTLAND GUILD OF DESIGN ENGINEERS',
    cards: defaultCards,
    platform: 'Mobile',
};
