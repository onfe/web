<template>
  <Layout>
    <Hero />
    <FeaturedProjects />
    <RecentBlog />
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";
import FeaturedProjects from "~/components/FeaturedProjects.vue";
import RecentBlog from "~/components/RecentBlog.vue";
export default {
  components: {
    Hero,
    FeaturedProjects,
    RecentBlog
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
