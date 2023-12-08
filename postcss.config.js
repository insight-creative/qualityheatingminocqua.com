const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md'
      ],
      safelist: [
        'mobile-dropdown-open',
        'is-active',
        'nav-open',
        'has-dropdown-open',
        'has-sub-menu-open',
        'expand',
        'collapse',
        'page-home',
        'parent-page-products',
        'page-contact',
        'page-id-a5de17d55a9b80cdac731fa24e6c61ab',
        'iframe',
      ]
    })
  ]
}
