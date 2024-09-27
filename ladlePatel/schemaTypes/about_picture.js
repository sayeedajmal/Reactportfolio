export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            /*  options: {
               hotspot: true, 
             }, */
            description: 'Set Image with this size  (2048 × 1365) (mandatory)',
            validation: Rule => Rule.required(),
        },
    ],
};
