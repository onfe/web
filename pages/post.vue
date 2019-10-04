<template>
  <article class="container">
    <div :is="comp"></div>
  </article>
</template>

<script>
import marked from 'marked'
import ProgImg from '@/components/ProgImg.vue'

export default {
  components: {},
  name: 'post',
  data() {
    const mdFile = require('@/posts/test.md')
    let mdHtml = marked(mdFile.default)

    const imgRe = /<img src="([^"]*)" ([^/>]*)\/?>/g

    mdHtml = mdHtml.replace(imgRe, ($0, $1) => `<ProgImg src="${$1}"/>`)
    console.log(mdHtml)

    const comp = {
      template: `<div>${mdHtml}</div>`,
      name: 'md',
      components: {
        ProgImg
      }
    }

    return {
      comp
    }
  }
}
</script>

<style lang="scss" scoped></style>
