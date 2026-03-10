export const heroCards = {
    name: 'heroCards',
    title: 'Hero / Feature Cards',
    type: 'document',
    fields: [
        {
            name: 'cards',
            title: 'Cards',
            description: 'The three introductory cards in the Hero section',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Card Title',
                            type: 'string',
                        },
                        {
                            name: 'bodyText',
                            title: 'Card Body Text',
                            type: 'text',
                        },
                        {
                            name: 'icon',
                            title: 'Icon Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Code', value: 'code' },
                                    { title: 'Message Circle', value: 'messageCircle' },
                                    { title: 'Eye Off', value: 'eyeOff' }
                                ],
                            }
                        }
                    ],
                },
            ],
            validation: (Rule: any) => Rule.max(3),
        },
    ],
}
