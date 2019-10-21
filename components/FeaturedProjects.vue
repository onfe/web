<template>
  <section>
    <HeadingMore title="Projects" more="/projects" />
    <div id="feat-proj" class="container projects">
      <ProjectCard
        v-for="(project, key) in projects"
        :key="key"
        :class="{ last: key == projects.length - 1 }"
        :image="project.attributes.image"
        :title="project.attributes.title"
        :subtitle="project.attributes.subtitle"
        :url="project.attributes.url"
      />
      <div class="spacer"></div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import HeadingMore from '@/components/HeadingMore.vue'

export default {
  components: {
    ProjectCard,
    HeadingMore
  },
  computed: {
    projects() {
      return this.$store.state.projects.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  padding: $spacer 0;
  display: flex;
  overflow: visible;
  justify-content: space-between;

  @include lt-sm {
    width: 100%;
    margin: 0;
    max-width: 100%;
    overflow-x: scroll;
  }
}

.spacer {
  width: 0.1px;
  height: 0.1px;
  flex-shrink: 0;
  overflow: hidden;
  @include sm {
    display: none;
  }
}

.card {
  flex: none;
  margin-left: $spacer;
  width: 14em;

  &.last {
    margin: 0 $spacer;
  }

  @include sm {
    margin: 0;
    margin-right: 1em;
    flex: auto;

    &.last {
      margin: 0;
    }
  }
}
</style>
