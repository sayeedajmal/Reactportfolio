export default {
    name: 'resume',
    title: 'resume',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'resume',
            type: 'image',
            /*  options: {
               hotspot: true, 
             }, */
            validation: Rule => Rule.required(),
        },
    ],
};
