<template>
  <div :is="this.md"></div>
</template>

<script>
import marked from 'marked'
import ProgImg from '@/components/ProgImg.vue'

export default {
  name: 'Post',
  components: {},
  props: {
    post: {
      type: String,
      default: ''
    }
  },
  data() {
    const mdFile = require('@/posts/' + this.post + '.md')
    let mdHtml = marked(mdFile.default)

    const imgRe = /<img src="([^"]*)" ([^/>]*)\/?>/g

    mdHtml = mdHtml.replace(imgRe, ($0, $1) => `<ProgImg src="${$1}"/>`)
    console.log(mdHtml)

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
.prog-image {
  border-radius: $spacer / 2;
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.5);
  overflow: visible;

  img {
    display: block;
  }
}
</style>
