---
title: Your blog, Nuxt and You.
date: 2019-12-31
lead: Building a blog with Nuxt.js and Markdown.
tags:
  - Nuxt
  - Vue
  - Web Development
---
A SSR blog, with lightweight pages *and* the power of a robust framework like Vue. Sounds like a dream, right? [Nuxt](https://nuxtjs.org/) promises this utopia, but needs some DIY work to add Markdown rendering and other nice-to-haves, such as progressive images.

# It's not Vue, it's me.
Nuxt is an extension of Vue, so why use Nuxt? We're after a few specific features, which include:

- Sensible defaults, extensible with Nuxt specific plugins.
- Server Side Rendering without the hassle.
- Automatic management of routes and layouts.

Being powered by Vue, you get the full power of a modern framework and the build tooling you'd expect on today's web. Nuxt isn't perfect. We're missing a few features needed to make a fantastic static site that really leverages the power of the tooling. I'll be going over how I implemented these missing features here, but assuming you know how to bootstrap and deploy a Nuxt project, as well as find your way around the configuration.

## Thank you, Nuxt.

For most blog-like situations, Nuxt is a bit overpowered. There are simpler options that require less work. Take a look at [Eleventy](https://www.11ty.dev/) for a really simple Markdown-based static site generator, or if you really want Vue, [VuePress](https://vuepress.vuejs.org/) offers a plug-and-play markdown blog and documentation solution.

For me, Nuxt made sense, but be sure to check out the other options before just jumping in on a custom solution.

# Server side Markdown
```markdown
# Your blog post, but where's the HTML?
Wouldn't it be nice to have some markdown compilation up in here!

![Lazy-loading, soon™](placeholder.jpg)

`And some code examples for your more technically minded viewers!`
```

Writing HTML for blog posts is an absolute pain, ideally we'd write Markdown instead. This can be done in Nuxt by using `markdown-it`, and is made even easier with `frontmatter-markdown-loader`. Configuration is only a few lines in `nuxt.config.js`.

Markdown is simple, yet expressive enough to write rich blog posts without fiddling with tags and syntax. During build, we want the markdown to be transformed to HTML that can be served statically, with no JavaScript required on the client.

## Webpack configuration

To get this to work, we need to let `webpack` know that markdown files (`.md`) need to be dealt with in some way during build.

```javascript
const md = require('markdown-it')({
  html: true,
  typographer: true
})

// ...

build: {
  extend(config, { isDev, isClient }) {
    // Load markdown as Vue components.
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: {
        // We want render functions so that they can SSR'd by Nuxt.
        // Mode.BODY is optional, and only required if you want the
        // raw markdown to be available.
        mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.BODY],
      	// Provide the markdown-it instance to render the markdown.
        markdown: (body) => {
          return md.render(body)
        }
      }
    });
  }
},
```

What we're doing here is extending the webpack configuration in `nuxt.config.js` to route markdown files to `frontmatter-markdown-loader`, which then requires some configuration.

The way you configure `markdown-it` is completely up to you, but can be extended with syntax highlighting or an assortment of plugins available on npm.

## Displaying markdown

Now that `webpack` knows the drill, we can require a markdown file just like anything else and it'll be dealt with. I've created a component creatively called `Markticle.vue` *(markdown article)* that deals gets passed the generated render function and displays it.

```html
<script>
export default {
  name: 'Markticle',
  props: {
    markdown: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    // eslint-disable-next-line no-new-func
    this.renderFunc = new Function(this.markdown.render)()
    // eslint-disable-next-line no-new-func
    this.$options.staticRenderFns = new Function(
      this.markdown.staticRenderFns
    )()
  },
  render(h) {
    return this.renderFunc ? this.renderFunc() : h('div')
  }
}
</script>
```

This component has no `<template>`, which may seem rather strange if you've new to Vue. Instead, we have a `render()` function that creates the markup. This is how Vue works behind the scenes, as all templates are converted to render functions anyway.

When this component is `created()`, it takes the render functions, which are passed as strings in an object, converts them back to functions, and passes them over to `render()`, which gets called by Vue.

Note the use of `new Function()` is flagged by ESLint as it is evaluating a string into code, which in some instances can lead to vulnerabilities. Whilst this isn't a problem here, it's important to know and understand the risks.

## Nuxt routing

As our markdown does not exist as a `.vue` file within the `/pages/` directory, we need to let Nuxt know the route should be rendered into HTML.

### File finding

We can find our files using a [glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)), and then convert the filenames into the routes used to access posts. I created a file `get-posts.js` that deals with finding posts and creating the routes.

```javascript
const glob = require('glob')

const postPaths = glob.sync('**/*.md', { cwd: 'posts' })

function getSlug(path) {
  let slug = path.substring(0, path.lastIndexOf('.'))
  return `/blog/p/${slug}/`
}

const posts = postPaths.map(getSlug)

export default posts
```

As I want to have my posts under `/blog/p/post-title`, I use glob to find the files within the `/posts/` directory, and form the slugs.

### Nuxt configuration

Nuxt now just needs these routes to be appended to the ones it generates and this can be done in `nuxt.config.js`.

```javascript
import posts from './plugins/get-posts.js'

generate: {
  routes: posts
}
```

## Putting it all together

The glue that holds this all together is a file called `_post.vue`,  that adds the title, date of publication and loads the render function into the `Markticle` component.

To determine what article you're requesting, the route parameter `post` includes the post we want to display. Nuxt handles views with an underscore as dynamic routes, so `_post.vue` is a dynamic route, with the parameter variable `post`.

```javascript
data() {
  const markdown = require('@/posts/' + this.$route.params.post + '.md')
  return {
    markdown,
    attributes: markdown.attributes
  }
}
```

All we need to do now is pass the markdown to the `Markticle` component. We can also use the markdown attributes that we added in the frontmatter to display a date, title, or similar.

```html
<template>
  <main>
    <h1>A blog post!</h1>
    <article class="container">
      <Markticle :markdown="markdown.vue"></Markticle>
    </article>
  </main>
</template>
```

That's it! Markdown should now be rendered and displayed, with the full power of Server Side Rendering, and Vue.

# Lazy, progressive images

As you may have noticed on this site I've got lazy-loaded progressive (and responsive) images. Feel free to dive into the [source](https://github.com/onfe/web/blob/master/components/ProgImg.vue) to see what I did. At it's core it's `responsive-loader` working in tandem with `vue-lazyload`.

I'm not entirely happy with my implementation yet - there's still some work to do! There's no point spreading a flawed method, so I'll avoid writing about it 'til I'm happy with the solution I've found.

# Summary

I hope you've found this useful - I spent quite some tinkering to find a good solution but there may still be improvements to be made. Feel free to get in touch if you've got any queries over on [Twitter](https://twitter.com/onfe1), and the source code for this site is available on [GitHub](https://github.com/onfe/web) so you can see how it all ties together.

Thanks for reading and best wishes for 2020. 🎉
