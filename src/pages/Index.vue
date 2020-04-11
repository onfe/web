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
  metaInfo() {
    const title = "Edward Hails - Software Engineer";
    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }]
    };
  }
};
</script>
