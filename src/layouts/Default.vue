<template>
  <div class="site">
    <Header />
    <main>
      <slot />
    </main>
    <About />
    <Footer />
  </div>
</template>

<script>
import About from "~/components/About.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    About,
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
