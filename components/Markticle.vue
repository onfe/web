<template>
  <div :is="md"></div>
</template>

<script>
import ProgImg from '@/components/ProgImg.vue'
const mdIt = require('markdown-it')({
  html: true,
  typographer: true
}).use(require('markdown-it-highlightjs'), { auto: true })

export default {
  name: 'Post',
  components: {},
  props: {
    markdown: {
      type: String,
      default: ''
    }
  },
  data() {
    let mdHtml = mdIt.render(this.markdown)

    const imgRe = /<img src="([^"]*)" alt="(r(\d+)x(\d+))? ?([^"]*)"[^/>]*?\/?>/g

    mdHtml = mdHtml.replace(imgRe, (m, p1, p2, p3, p4, p5) => {
      const alt = p5 ? `alt="${p5}"` : ''
      const ratio = p3 && p4 ? `:ratio="${p3 / p4}"` : ''
      return `<ProgImg src="${p1}" ${alt}${ratio}/>`
    })

    const md = {
      template: `<div>${mdHtml}</div>`,
      name: 'md',
      components: {
        ProgImg
      }
    }

    return {
      md
    }
  }
}
</script>

<style scoped lang="scss">
div /deep/ {
  .prog-image {
    border-radius: $spacer / 2;
    box-shadow: $subtle-shadow;
    overflow: hidden;
    max-height: 30em;
    max-width: 40em;
    margin: 0 auto;

    img {
      display: block;
    }
  }

  pre {
    padding: $spacer;
    border-radius: $spacer / 2;
  }
}
</style>
