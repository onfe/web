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
    title: "Edward Hails",
    meta: [
      { name: "og:title", content: "Edward Hails - Onfe" },
      { name: "og:type", content: "website" },
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
