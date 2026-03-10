import React from 'react';
import { Card } from './Card.jsx';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Title',
        bodyText: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
        showAsset: true,
        showButton: true,
    },
    argTypes: {
        assetType: {
            control: 'radio',
            options: ['Icon', 'Image'],
        },
        variant: {
            control: 'radio',
            options: ['Stroke', 'Default'],
        },
        direction: {
            control: 'radio',
            options: ['Horizontal', 'Vertical'],
        },
    },
};

// Base variants to showcase the Figma matrix
export const IconDefaultHorizontal = {
    args: {
        assetType: 'Icon',
        variant: 'Default',
        direction: 'Horizontal',
    },
};

export const IconStrokeVertical = {
    args: {
        assetType: 'Icon',
        variant: 'Stroke',
        direction: 'Vertical',
    },
};

export const ImageDefaultHorizontal = {
    args: {
        assetType: 'Image',
        variant: 'Default',
        direction: 'Horizontal',
    },
};

export const ImageDefaultVertical = {
    args: {
        assetType: 'Image',
        variant: 'Default',
        direction: 'Vertical',
    },
};

export const ImageStrokeHorizontal = {
    args: {
        assetType: 'Image',
        variant: 'Stroke',
        direction: 'Horizontal',
    },
};

export const ImageStrokeVertical = {
    args: {
        assetType: 'Image',
        variant: 'Stroke',
        direction: 'Vertical',
    },
};

// Interactive playground
export const Playground = {
    args: {
        assetType: 'Icon',
        variant: 'Stroke',
        direction: 'Vertical',
    },
};
