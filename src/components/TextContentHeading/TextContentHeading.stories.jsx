import React from 'react';
import { TextContentHeading } from './TextContentHeading.jsx';

export default {
    title: 'Components/TextContentHeading',
    component: TextContentHeading,
    parameters: {
        layout: 'padded',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#1a1a1a' },
            ]
        }
    },
    args: {
        text: 'This is a heading for text content.',
        subtitle: 'This is a secondary description or subtitle providing more context to the heading.',
    },
};

export const Default = {};

export const WithoutSubtitle = {
    args: {
        subtitle: '',
    }
};

export const LongHeading = {
    args: {
        text: 'This is a much longer heading that might wrap onto multiple lines depending on the container, adding main takeaway points, quotes, anecdotes.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
};
