export const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      initialValue: 'PORTLAND GUILD OF DESIGN ENGINEERS',
    },
    {
      name: 'links',
      title: 'Links',
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
      title: 'Action Button',
      type: 'object',
      fields: [
        { name: 'label', title: 'Button Text', type: 'string', initialValue: 'Request Application Review' },
        { name: 'href', title: 'Button Link', type: 'string', initialValue: '/apply' },
      ],
    },
  ],
}
