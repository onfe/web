<template>
  <div class="site">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.site {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
