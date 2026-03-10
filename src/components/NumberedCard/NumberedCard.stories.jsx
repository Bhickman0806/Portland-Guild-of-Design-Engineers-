import React from 'react';
import { NumberedCard } from './NumberedCard.jsx';

export default {
    title: 'Components/NumberedCard',
    component: NumberedCard,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' }, // Using dark background since the text is light/white
    },
    args: {
        number: '01',
        title: 'TITLE',
        bodyText: 'You must be currently shipping production UI. Management tracks do not qualify.',
    },
};

export const Default = {
    args: {
        number: '01',
        title: 'TITLE',
        bodyText: 'You must be currently shipping production UI. Management tracks do not qualify.',
    },
};
