<template>
  <div v-lazy-container="{ selector: 'img' }" class="">
    <img :data-src="src" :data-loading="lqip" :src="lqip" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    lqip: {
      type: String,
      default: ''
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
