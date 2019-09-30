<template>
  <main>
    <Hero />
    <FeaturedProjects />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'

export default {
  components: {
    Hero,
    FeaturedProjects
  }
}
</script>

<style lang="scss" scoped>
.temp {
  height: 20em;
}
</style>
