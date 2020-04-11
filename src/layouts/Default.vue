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
import Header from "~/components/Header.vue";
const About = () =>
  import(/* webpackChunkName: "about" */ "~/components/About.vue");
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    About
  },
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "I'm Edward Hails; a BSc Computer Scientist, Software Engineer and avid tea drinker."
      },
      { name: "og:title", content: "Edward Hails - Onfe" },
      { name: "og:type", content: "website" },
      { name: "og:description", content: "I'm Edward Hails; a BSc Computer Scientist, Software Engineer and avid tea drinker." },
      { name: "og:url", content: "https://onfe.uk" },
      { name: "og:image", content: "https://onfe.uk/onfe-og-default.png" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:image",
        content: "https://onfe.uk/onfe-twitter-default.png"
      }
    ]
  }
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
