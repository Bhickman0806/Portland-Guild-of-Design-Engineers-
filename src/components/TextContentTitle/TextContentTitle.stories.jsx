import React from 'react';
import { TextContentTitle } from './TextContentTitle.jsx';

export default {
    title: 'Components/TextContentTitle',
    component: TextContentTitle,
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
        text: 'PORTLAND GUILD OF DESIGN ENGINEERS',
        subtitle: 'A community of practice for product designers, design systems engineers, and creative technologists.',
    },
};

export const Default = {};

export const WithoutSubtitle = {
    args: {
        subtitle: '',
    }
};

export const LongTitle = {
    args: {
        text: 'A VERY LONG TEXT CONTENT TITLE THAT MIGHT MIGHT NOT WRAP DEPENDING ON CONTAINER WIDTH',
        subtitle: 'And a longer subtitle to match the text layout and describe the content below in further detail.',
    }
};
