<template>
  <Layout>
    <Hero />
    <FeaturedProject />
    <RecentBlog />
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
    RecentBlog
  },
  metaInfo: {
    title: "Edward Hails - Software Engineer"
  }
};
</script>
