export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'number',
        title: 'Service Number',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'title',
        title: 'Service Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Service Description',
        type: 'text',
        validation: Rule => Rule.required(),
      },
    ],
  };
  