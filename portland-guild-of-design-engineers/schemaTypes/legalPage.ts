export const legalPage = {
  name: 'legalPage',
  title: 'Legal Terms',
  type: 'document',
  fields: [
    { name: 'pageTitle', title: 'Page Title', type: 'string', initialValue: 'Legal Terms & Conditions' },
    { name: 'lastUpdated', title: 'Last Updated Date', type: 'string', initialValue: 'Effective Date: March 2026' },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
