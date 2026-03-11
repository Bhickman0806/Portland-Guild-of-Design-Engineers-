export const applyPage = {
  name: 'applyPage',
  title: 'Apply Page',
  type: 'document',
  fields: [
    { name: 'pageTitle', title: 'Page Title', type: 'string', initialValue: 'Request Application Review' },
    { name: 'formInstructions', title: 'Form Instructions', type: 'text', initialValue: 'Please provide links to your best work. Our review committee meets monthly to formally review applications.' },
    {
      name: 'formFields',
      title: 'Form Field Labels',
      type: 'object',
      fields: [
        { name: 'nameLabel', title: 'Name Label', type: 'string', initialValue: 'Name' },
        { name: 'emailLabel', title: 'Email Label', type: 'string', initialValue: 'Email' },
        { name: 'portfolioLabel', title: 'Portfolio / Work Link Label', type: 'string', initialValue: 'Portfolio or Recent Work URL' },
        { name: 'githubLabel', title: 'GitHub Link Label', type: 'string', initialValue: 'GitHub URL' },
        { name: 'linkedinLabel', title: 'LinkedIn Link Label', type: 'string', initialValue: 'LinkedIn URL' },
      ],
    },
    { name: 'submitButtonText', title: 'Submit Button Text', type: 'string', initialValue: 'Submit Application for Review' },
    { name: 'successMessageTitle', title: 'Success Message Title', type: 'string', initialValue: 'Application Received' },
    { name: 'successMessageBody', title: 'Success Message Body', type: 'text', initialValue: 'Thank you for submitting your application. The review committee will evaluate your materials, and we will contact you via email regarding the next steps.' },
  ],
}
