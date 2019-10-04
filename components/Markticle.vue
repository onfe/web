<template>
  <div :is="md"></div>
</template>

<script>
import marked from 'marked'
import ProgImg from '@/components/ProgImg.vue'

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
    let mdHtml = marked(this.markdown)

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
div /deep/ {
  .prog-image {
    border-radius: $spacer / 2;
    box-shadow: 0 1px 16px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    img {
      display: block;
    }
  }
}
</style>
