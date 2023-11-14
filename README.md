# Greiber Heating and Sheet Metal

A custom Hugo website built from the Insight Creative, Inc. Hugo starter boilerplate Quintessence. The [Hugo](https://gohugo.io/) boilerplate we use for our projects.

The repo for the boilerplate can be found at https://github.com/insight-creative/Quintessence

**Disclaimer** - This site has been heavily integrated with [Netlify](https://www.netlify.com/), and therefore many features are specific to the Netlify platform and may not work with other hosting providers. This site also uses [NetlifyCMS](https://www.netlifycms.org/) as a CMS. Make sure to run a git pull before starting any work in case the client has made changes on their end.

## Getting Started

To get started, clone the repository, then run the following from the project root:

```
npm install
hugo server
```

Simple as that, you can now start building everything you need. Hugo's server has automatic, powerful, and insanely fast SCSS, JS, and image processing through their Hugo Pipes system. Read more about that in the [Hugo docs](https://gohugo.io/hugo-pipes/).

## File Structure

```
│   │
|   └──── /assets            - Source files for assets (SCSS, JS etc)
|   | dark.scss              - css file that holds styles for anyone that has dark mode preferences set on their devices
|   | main.scss              - css file that holds all our main styles
│
|
└──── /content               - Content files
|   | about                  - About page content and assets
|   | contact                - Contact page content and assets
|   | financing              - Financing page content and assets
|   | products               - Products page and interior product sub pages content and assets
|   | services               - Services page and interior services sub pages content and assets
|   | thank-you              - Thank You page content and assets
|   | _index.md              - Home page content
|
└──── /layouts               - Template files
│   │ _default               - Here you will find the base template, baseof.html along with a generic list and single template.
│   │ about                  - About Page template
│   │ contact                - Contact Page template
│   │ financing              - Financing Page template
│   │ partials               - Partials are any reusable bits of code or in some cases larger section like head.html that are broken out to keep code easier to manage
│   │ products               - Products Templates, both single and list templates live in here
│   │ services               - Services Templates, both single and list templates live in here
│   │ shortcodes             - No special shortcodes were needed for this site
│   │ sitemap                - Sitemap Template, this is the human readable sitemap.
│   │ thank-you              - Thank You Template
│   │ 404.html               - 404 Template
│   │ index.html              - Homepage Template
│   │ index.headers          - Custom Netlify HTTP headers
│   │ index.redirects        - Custom Netlify redirect rules
│   │ robots.txt             - Template for robots.txt
│   │ sitemap.xml            - Sitemap
│   │
│   └──── /_default          - Base templates for list & singular pages
│   │   │ baseof.html        - Base template
│   │   │ list.html          - List/taxonomy template
│   │   │ single.html        - Singular page/post template
│   │
│   └──── /partials          - Partials
│   |   │ footer.html        - Sites primary <footer>
│   |   │ head.html          - Sites primary head section, containing SEO data, stylesheet configurations and more
│   |   │ header.html        - Sites primary <header>
│   |   │ cta.html           - Sites primary cta block
│   |   │ scripts.html       - Sites primary scripts and JS processing/pipes setup
│   │
│   └──── /static            - Hugo static resources
|       | images             - A few static images like the site logo can be found here. Most images are stored in their page bundles
│
│ .gitignore
│ LICENSE
│ README.md
│ config.toml                - Hugo configuration, probably the most important piece in here is the navigation menu
│ postcss.config.js          - PostCSS and PurgeCSS configuration for Hugo Pipes
│ netlify.toml               - Netlify configuration
│ package.json
```

The above File Structure should give you a pretty good understanding of where everything is if/when changes are needed.

There's really not a whole lot more too it. Happy building!
