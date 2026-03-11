export const privacyPage = {
  name: 'privacyPage',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    { name: 'pageTitle', title: 'Page Title', type: 'string', initialValue: 'Privacy Policy' },
    { name: 'lastUpdated', title: 'Last Updated Date', type: 'string', initialValue: 'Effective Date: March 2026' },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
