<template>
  <main class="pad">
    <article class="container">
      <Markticle :post="post"></Markticle>
    </article>
  </main>
</template>

<script>
import Markticle from '@/components/Markticle.vue'

export default {
  components: {
    Markticle
  },
  data() {
    return {
      post: this.$route.params.post
    }
  }
}
</script>

<style scoped lang="scss">
.pad {
  padding: $spacer;
}
</style>
