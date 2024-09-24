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
            validation: Rule => Rule.required(),
        },
    ],
};
