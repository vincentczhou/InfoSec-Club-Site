![Logo](/public/static/images/avatars/default.png)

# InfoSec Club Site

Built with [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

## Content Guidelines

### Adding CTFs

1. In [/data/CTFData.js](data/CTFData.js), append a new entry to the end of `CTFData` in the following format:

```javascript
{
   name: 'CTF Name', //[Required] Name of CTF
   id: 1234, //[Required] CTFtime ID from https://www.ctftime.org/event/ID
   rank: '1', //[Optional] Team ranking in CTF
   year: '2022', //[Required] Year CTF Held
   imgSrc: '/static/images/pastCTF/ID.png' //[Required] Logo from https://www.ctftime.org/event/ID
}
```

2. Grab the CTF Logo from `https://www.ctftime.org/event/ID` and put it in [/public/static/images/pastCTF](/public/static/images/pastCTF) after renaming it to `ID.png`.

### Adding Authors (Members)

1. In [/data/authors](data/authors), add a new file called `authorname.md` containing the following format:

```md
---
name: Your Name #[Required] Your Name
avatar: /static/images/avatars/authorname.png #[Required] Please ensure it is a high resolution file greater than 75px x 75px
occupation: Student #[Required] Student, Teacher, Professor, etc.
company: Organization Name #[Required] Organization Name
email: optional@optional.com #[Optional] Email Address
github: https://www.github.com #[Optional] Github Account Link
linkedin: https://www.linkedin.com #[Optional] LinkedIn Account Link
instagram: https://www.instagram.com #[Optional] Instagram Account Link
ctftime: https://www.ctftime.org #[Optional] CTFtime Account Link
homepage: https://www.yoursitename.com #[Optional] Personal Website Link
specialty: Web #[Required] Web, Rev, Pwn, etc.
role: Member #[Required] President, Officer, Member, etc. All other entries will be sorted accordingly
---
```

2. Put a high resolution png file (greater than 75px by 75px) in [/public/static/images/avatars](public/static/images/avatars) after renaming it to `authorname.png`.

### Adding Blog Posts

Refer to **[Sample posts](#sample-posts)** and **[Post](#post)**.
Placeholder

### Adding Challenges

1. In [/data/challengeData.js](data/challengeData.js), append a new entry to the end of `challengeData` in the following format:

```javascript
1: { //[Required] Challenge ID and Number
   name: 'Challenge Name', //[Required] Name of Challenge
   author: 'Vincent C.', //[Required] Challenge Author
   category: 'Web', //[Required] Challenge Category
   difficulty: 'Easy', //[Required] Challenge Difficulty
   body: ( //[Required] Description of Challenge (React Fragment)
   <>
      Challenge Description
   </>
   ),
   download: { //[Optional] Download Objects where "Link" is located at /public/static/challenges/ID/DOWNLOAD LINK (Object)
      'Name': 'Link',
   },
   link: { //[Optional] Link Objects (Object)
      Name: 'Link',
   },
   flag: process.env.FLAG_1, //[Required] Flag Stored in Environment Variables - process.env.FLAG_ID
}
```

2. If the Challenge requires a `download`, place the corresponding content in [/public/static/challenges/ID](public/static/challenges).

3. If the Challenge requires **visible** API/Endpoint usage, add a new handler file under [/pages/api/challenges/ID](pages/api/challenges). Corresponding `source` links should be formatted as `${siteMetadata.siteRepo}/blob/master/pages/api/challenges/ID/HANDLER.js`. If only one file is utilized, name it `index.js` and have the `link` entry point to `/api/challenges/ID`.

4. Configure the private environment variables in the hosting service so that `process.env.FLAG_ID` contains the flag.

## Sample posts

- [A markdown guide](https://tailwind-nextjs-starter-blog.vercel.app/blog/github-markdown-guide)
- [Learn more about images in Next.js](https://tailwind-nextjs-starter-blog.vercel.app/blog/guide-to-using-images-in-nextjs)
- [A tour of math typesetting](https://tailwind-nextjs-starter-blog.vercel.app/blog/deriving-ols-estimator)
- [Simple MDX image grid](https://tailwind-nextjs-starter-blog.vercel.app/blog/pictures-of-canada)
- [Example of long prose](https://tailwind-nextjs-starter-blog.vercel.app/blog/the-time-machine)
- [Example of Nested Route Post](https://tailwind-nextjs-starter-blog.vercel.app/blog/nested-route/introducing-multi-part-posts-with-nested-routing)

## Quick Start Guide

1. TypeScript and Contentlayer (alpha)

```bash
npx degit 'timlrx/tailwind-nextjs-starter-blog#contentlayer'
```

or JS (official support)

```bash
npx degit https://github.com/timlrx/tailwind-nextjs-starter-blog.git
```

or with TypeScript (community support)

```bash
npx degit 'timlrx/tailwind-nextjs-starter-blog#typescript'
```

2. Personalize `siteMetadata.js` (site related information)
3. Modify the content security policy in `next.config.js` if you want to use
   any analytics provider or a commenting solution other than giscus.
4. Personalize `authors/default.md` (main author)
5. Modify `projectsData.js`
6. Modify `headerNavLinks.js` to customize navigation links
7. Add blog posts
8. Deploy on Vercel

## Installation

```bash
npm install
```

## Development

First, run the development server:

```bash
npm start
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Extend / Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card on the projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`css/prism.css` - controls the styles associated with the code blocks. Feel free to customize it and use your preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

## Post

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.
