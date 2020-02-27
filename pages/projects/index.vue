<template>
  <main>
    <portal to="header">
      <HeroTitle title="Projects" />
    </portal>
    <article>
      <div class="container projects">
        <Project
          v-for="(project, key) in projects"
          :key="key"
          v-bind="project.attributes"
        />
        <div class="end">
          <a href="#top" class="more top">Back to Top</a>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import HeroTitle from '@/components/HeroTitle.vue'
import Project from '@/components/Project.vue'

export default {
  components: {
    HeroTitle,
    Project
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },
  head() {
    return {
      title: 'Projects'
    }
  }
}
</script>

<style scoped lang="scss">
article {
  padding: $spacer;
}

.end {
  text-align: center;
}
</style>
