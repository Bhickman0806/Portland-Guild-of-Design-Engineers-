export const hero = {
    name: 'hero',
    title: 'Hero / Header',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true, // Let authors select the focal point of the image
            },
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
        }
    ],
}
