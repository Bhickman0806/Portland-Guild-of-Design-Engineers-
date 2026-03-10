import React from 'react';
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

export const Default = {
    args: {
        children: 'Click Me',
        className: '',
    },
};

export const WithIcons = {
    args: {
        children: 'Download',
        iconStart: '⬇️',
        iconEnd: '✨',
    },
};
