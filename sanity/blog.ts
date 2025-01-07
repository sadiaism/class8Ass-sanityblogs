// sanity/blog.ts
export const revalidate =10 //seconds

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text'
        }
        
    ]
}