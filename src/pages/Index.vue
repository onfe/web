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
  metaInfo() {
    const title = "Edward Hails - Software Engineer";
    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }]
    };
  }
};
</script>
