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
      description: 'Capture a full-width screenshot of the project by PC/Laptop (mandatory)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      title: 'Project URL',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
    }
  ],
};
