<template>
  <div v-lazy-container="{ selector: 'img' }" :style="rStyle" :class="rClass">
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
    },
    ratio: {
      type: Number,
      default: -1
    }
  },
  computed: {
    lqip() {
      return require('~/assets/img/' + this.src + '?lqip')
    },
    imgSrc() {
      return require('~/assets/img/' + this.src + '?resize')
    },
    rStyle() {
      const perc = (1 / this.ratio) * 100
      return this.ratio > 0 ? `padding-bottom: ${perc}%;` : ''
    },
    rClass() {
      return (this.ratio > 0 ? 'ratio' : 'noRatio') + ' prog-image'
    }
  }
}
</script>

<style scoped lang="scss">
div {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  position: relative;

  &.ratio {
    box-sizing: content-box;
    height: 0;
  }

  .ratio > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }
}

img {
  width: 100%;
  overflow: hidden;
}
</style>
