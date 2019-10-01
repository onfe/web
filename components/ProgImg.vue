<template>
  <div v-lazy-container="{ selector: 'img' }" class="">
    <img
      :data-src="require('~/assets/img/placeholder.jpg')"
      :data-loading="require('~/assets/img/placeholder.jpg?lqip')"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
img[lazy='loading'] {
  filter: blur(5px);
}

div {
  width: 100%;
}

img {
  width: 100%;
  overflow: hidden;
}
</style>
