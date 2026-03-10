export const salons = {
    name: 'salons',
    title: 'Salons (List Image Section)',
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
            name: 'items',
            title: 'List Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'number',
                            title: 'Number (e.g. 01)',
                            type: 'string',
                        },
                        {
                            name: 'title',
                            title: 'Item Title',
                            type: 'string',
                        },
                        {
                            name: 'bodyText',
                            title: 'Item Body Text',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
    ],
}
