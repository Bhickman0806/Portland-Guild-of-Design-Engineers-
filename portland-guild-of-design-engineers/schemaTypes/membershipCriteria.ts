export const membershipCriteria = {
    name: 'membershipCriteria',
    title: 'Membership Criteria',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Section Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'string',
        },
        {
            name: 'cards',
            title: 'Cards',
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
                    ],
                },
            ],
        },
    ],
}
