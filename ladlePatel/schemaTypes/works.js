export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Project Image',
        type: 'image',
        // options: {
        //   hotspot: true,
        // },
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Project Description',
        type: 'text',
        validation: Rule => Rule.required(),
      },
    ],
  };
  