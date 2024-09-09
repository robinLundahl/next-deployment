export interface Post {
    id: string
    title: string
    body: string
    author: string
    createdAt: Date;
}

export const posts: Post[] = [
    {
        id: '1',
        title: 'Understanding TypeScript Interfaces',
        body: 'In this post, we will explore how to define and use interfaces in TypeScript.',
        author: 'Jane Doe',
        createdAt: new Date('2023-09-01')
    },
    {
        id: '2',
        title: 'A Guide to JavaScript Closures',
        body: 'Closures are a fundamental concept in JavaScript that allows functions to access variables outside their scope.',
        author: 'John Smith',
        createdAt: new Date('2023-08-25')
    },
    {
        id: '3',
        title: 'What’s New in ES2023?',
        body: 'This post provides an overview of the new features introduced in ECMAScript 2023, including top-level await and Array methods.',
        author: 'Alice Johnson',
        createdAt: new Date('2023-07-15')
    }
];

