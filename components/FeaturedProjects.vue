<template>
  <section>
    <HeadingMore title="Projects" more="/projects" />
    <div id="feat-proj" class="container projects">
      <ProjectCard
        class="card"
        image="beautisearch.jpg"
        title="BeautiSearch"
        subtitle="The new, new tab."
        url="https://www.beautisear.ch"
      />
      <ProjectCard
        class="card"
        image="texto.jpg"
        title="Texto"
        subtitle="Quirky text animations"
        url="/projects/texto"
      />
      <ProjectCard
        class="card last"
        image="completionist.png"
        title="Completionist"
        subtitle="OSS autocomplete engine"
        url="https://github.com/onfe/Completionist"
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
