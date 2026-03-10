import React from 'react';
import { LabeledCardGridSection } from './LabeledCardGridSection.jsx';
import { PenToolIcon, RocketIcon, BriefcaseIcon, VerifiedIcon } from 'lucide-react';

export default {
    title: 'Components/Labeled Card Grid Section', // Note: Spaces included as requested
    component: LabeledCardGridSection,
    parameters: {
        layout: 'padded',
        backgrounds: { default: 'dark' }, // Using dark background for contrast
    },
    args: {
        title: 'Membership Criteria',
        subtitle: 'What we’re looking for',
        cards: [
            {
                title: 'Digital Product Designers',
                bodyText: 'The Guild is composed of practitioners who create interactive designs and are directly instrumental in implementing them within functional products.'
            },
            {
                title: 'early adopters',
                bodyText: 'Ideal participants are individual contributors and managers who actively experiment with and share insights regarding AI coding agents, UX writing GPTs, and emerging delivery workflows.'
            },
            {
                title: 'Practicing Professionals',
                bodyText: 'Membership requires being actively employed full-time in the field. While teaching is a noble pursuit, the Guild is fundamentally an organization for applied professional practice.'
            },
            {
                title: 'Seasoned Experts',
                bodyText: 'The organization is designed for verified, high-level practitioners. Unlike public networking groups defined by career-stage noise or social media performance, the Guild serves those with significant professional tenure and accountability.'
            }
        ]
    },
};

export const Default = {
    args: {
        title: 'Membership Criteria',
        subtitle: 'What we’re looking for',
        cards: [
            {
                icon: <PenToolIcon />,
                title: 'Digital Product Designers',
                bodyText: 'The Guild is composed of practitioners who create interactive designs and are directly instrumental in implementing them within functional products.'
            },
            {
                icon: <RocketIcon />,
                title: 'early adopters',
                bodyText: 'Ideal participants are individual contributors and managers who actively experiment with and share insights regarding AI coding agents, UX writing GPTs, and emerging delivery workflows.'
            },
            {
                icon: <BriefcaseIcon />,
                title: 'Practicing Professionals',
                bodyText: 'Membership requires being actively employed full-time in the field. While teaching is a noble pursuit, the Guild is fundamentally an organization for applied professional practice.'
            },
            {
                icon: <VerifiedIcon />,
                title: 'Seasoned Experts',
                bodyText: 'The organization is designed for verified, high-level practitioners. Unlike public networking groups defined by career-stage noise or social media performance, the Guild serves those with significant professional tenure and accountability.'
            }
        ]
    }
};
