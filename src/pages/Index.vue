<template>
  <Layout>
    <Hero />
    <FeaturedProject />
    <RecentBlog />
    <div class="long">
      Body text
    </div>
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";
import FeaturedProject from "~/components/FeaturedProject.vue";
import RecentBlog from "~/components/RecentBlog.vue";
export default {
  components: {
    Hero,
    FeaturedProject,
    RecentBlog,
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
