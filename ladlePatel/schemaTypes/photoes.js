export default {
    name: 'photoes',
    title: 'photoes',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'photoes',
            type: 'image',
            validation: Rule => Rule.required(),
        },
    ],
};
