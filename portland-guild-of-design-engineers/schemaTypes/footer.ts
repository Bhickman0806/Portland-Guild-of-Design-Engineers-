export const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'links',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL/ID', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'actionLink',
      title: 'Action Link',
      type: 'object',
      fields: [
        { name: 'label', title: 'Button Text', type: 'string', initialValue: 'Request Application Review' },
        { name: 'href', title: 'Button Link', type: 'string', initialValue: '/apply' },
      ],
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 Portland Guild of Design Engineers',
    },
  ],
}
