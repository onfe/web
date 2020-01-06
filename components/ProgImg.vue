<template>
  <div v-lazy-container="{ selector: 'img' }" class="prog-image">
    <img :data-src="imgSrc" :data-loading="sqip" :src="sqip" />
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
    sqip() {
      return require('~/assets/img/' + this.src + '?sqip')
    },
    imgSrc() {
      return require('~/assets/img/' + this.src + '?resize')
    }
  }
}
</script>

<style scoped lang="scss">
.prog-image {
  overflow: hidden;
}

img {
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  display: block;

  &:not([lazy='loaded']) {
    filter: blur(5px);
    transform: scale(1.05);
  }
}
</style>
