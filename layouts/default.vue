<template>
  <div class="site" name="top">
    <Header />
    <nuxt class="content" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1 0 auto;
}
</style>
