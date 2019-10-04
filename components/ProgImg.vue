<template>
  <div v-lazy-container="{ selector: 'img' }" class="prog-image">
    <img :data-src="imgSrc" :data-loading="lqip" :src="lqip" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: -1
    }
  },
  computed: {
    lqip() {
      return require('~/assets/img/' + this.src + '?lqip')
    },
    imgSrc() {
      return require('~/assets/img/placeholder.jpg?resize&size=350')
    },
    resize() {
      return this.size < 0 ? '' : `?resize&size=${this.size}`
    }
  }
}
</script>

<style scoped lang="scss">
div {
  width: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  overflow: hidden;
}
</style>
