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

    const imgRe = /<img src="([^"]*)" ([^/>]*)\/?>/g

    mdHtml = mdHtml.replace(imgRe, ($0, $1) => `<ProgImg src="${$1}"/>`)

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
