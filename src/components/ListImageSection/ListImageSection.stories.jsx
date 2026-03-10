import { ListImageSection } from './ListImageSection';
import { MailIcon, MessageCircleIcon, EyeOffIcon } from 'lucide-react';

export default {
    title: 'Components/ListImageSection',
    component: ListImageSection,
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
        platform: {
            control: 'radio',
            options: ['Desktop', 'Mobile'],
        },
        subtitle: { control: 'text' },
        title: { control: 'text' },
    },
};

const demoItems = [
    {
        number: '01',
        cardProps: {
            title: "Real-World Case Studies",
            body: "One member presents a deep-dive case study on recent engineering hurdles. Expect unvarnished truths and practical insights.",
            showButton: true,
            buttonText: "Join waitlist",
            icon: MessageCircleIcon
        }
    },
    {
        number: '02',
        cardProps: {
            title: "The Roundtable Discussion",
            body: "Operating under Chatham House Rules, the floor is open for peer-to-peer problem solving and strategy formulation.",
            showButton: true,
            buttonText: "Join waitlist",
            icon: EyeOffIcon
        }
    },
    {
        number: '03',
        cardProps: {
            title: "Actionable Takeaways",
            body: "The objective is to leave with high-signal, practical takeaways that can be applied to ongoing or future design engineering projects.",
            showButton: true,
            buttonText: "Join waitlist",
            icon: MailIcon
        }
    }
];

export const Desktop = {
    args: {
        platform: 'Desktop',
        subtitle: "The Salons",
        title: "AN OPEN TABLE FOR ACTIVE PRACTITIONERS",
        items: demoItems,
        imageSrc: "https://placehold.co/600x800/161617/FFFFFF?text=GIF+Here"
    },
};

export const Mobile = {
    args: {
        platform: 'Mobile',
        subtitle: "The Salons",
        title: "AN OPEN TABLE FOR ACTIVE PRACTITIONERS",
        items: demoItems,
        imageSrc: "https://placehold.co/600x800/161617/FFFFFF?text=GIF+Here"
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        }
    }
};
