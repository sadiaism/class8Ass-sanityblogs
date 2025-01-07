// sanity/blog.ts
import {defineField} from "sanity"
export const revalidate =10 //seconds

export default{
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: ' Blog Title',
            description:"Title of the blog",
            validation:Rule =>Rule.required()
        }),

        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
        }),

        defineField({
            name: 'buttonText',
            type: 'string',
            title: 'Button Text'
        }),

        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type: 'block'}]
        }),

        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength:96
            },
            validation:Rule=>Rule.required()
            }),

        defineField({
                name: 'summary',
                type: 'string',
                title: 'Summary'
            }),

        defineField({
                name: 'author',
                type: 'string',
                title: 'AuthorName'
            }),
        
    ]
}