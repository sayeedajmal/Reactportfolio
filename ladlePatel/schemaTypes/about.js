export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Skill Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'width',
            title: 'Progress Bar Width',
            type: 'string',
            description: 'Enter a percentage (e.g., "70%")',
            validation: Rule => Rule.required(),
        },
    ],
};
