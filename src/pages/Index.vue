<template>
  <Layout>
    <Hero />
    <FeaturedProject />
    <div class="long">
      Body text
    </div>
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";
import FeaturedProject from "~/components/FeaturedProject.vue";
export default {
  components: {
    Hero,
    FeaturedProject
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}

.long {
  padding: 50vh $spacer;
}
</style>
