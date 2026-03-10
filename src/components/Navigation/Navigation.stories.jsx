import { Navigation } from './Navigation';

export default {
    title: 'Components/Navigation',
    component: Navigation,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' }
            ],
        },
    },
    argTypes: {
        links: { control: 'object' },
        actionLink: { control: 'object' },
    },
};

export const Default = {
    args: {
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Legal", href: "#" },
            { label: "Copyright 2026", href: "#" }
        ],
        actionLink: { label: "Request Application Review", href: "#" }
    },
};
