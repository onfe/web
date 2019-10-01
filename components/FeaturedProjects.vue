<template>
  <section>
    <div class="pad">
      <div class="container split">
        <h2 class="a-yell">Projects</h2>
        <n-link to="/projects" class="more">more</n-link>
      </div>
    </div>
    <div id="feat-proj" class="container projects">
      <ProjectCard
        class="card"
        :image="require('~/assets/img/placeholder.jpg')"
        :lqip="require('~/assets/img/placeholder.jpg?lqip')"
        title="BeautiSearch"
        subtitle="The (old) new tab. Needs an update."
        url="https://www.beautisear.ch"
      />
      <ProjectCard
        class="card"
        :image="require('~/assets/img/placeholder.jpg')"
        :lqip="require('~/assets/img/placeholder.jpg?lqip')"
        title="Texto"
        subtitle="Quirky text animations"
      />
      <ProjectCard
        class="card last"
        :image="require('~/assets/img/placeholder.jpg')"
        :lqip="require('~/assets/img/placeholder.jpg?lqip')"
        title="Completionist"
        subtitle="Open-source autocomplete engine"
      />
      <div class="spacer"></div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  mounted() {
    const cards = document.getElementById('feat-proj')
    cards.scrollLeft = cards.scrollWidth / 2 - cards.clientWidth / 2
  }
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  padding: $spacer 0;
}

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

.pad {
  padding: 0 $spacer;
}

.split {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.card {
  flex: none;
  margin: 0 $spacer;
  width: 14em;

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
