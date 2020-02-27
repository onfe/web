<template>
  <main>
    <portal to="header">
      <Hero />
    </portal>
    <FeaturedProjects />
    <RecentBlog />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import RecentBlog from '@/components/RecentBlog.vue'

export default {
  components: {
    Hero,
    FeaturedProjects,
    RecentBlog
  },
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  section {
    position: relative;
    padding-top: $spacer;

    &:last-of-type {
      padding: $spacer 0;
    }
  }
}
</style>
