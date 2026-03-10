import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="*" element={<Story />} />
                </Routes>
            </MemoryRouter>
        ),
    ],
};

export const Default = {
    args: {
        links: [
            { label: 'Privacy Policy', href: '/privacy#privacy-policy' },
            { label: 'Legal', href: '/legal#legal' },
            { label: 'Copyright 2026', href: '/legal#copyright' },
        ],
        actionLink: { label: 'Request Application Review', href: '/apply' },
    },
};

export const ActiveLink = {
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/privacy']}>
                <Routes>
                    <Route path="*" element={<Story />} />
                </Routes>
            </MemoryRouter>
        ),
    ],
    args: Default.args,
};
