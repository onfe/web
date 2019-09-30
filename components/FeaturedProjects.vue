<template>
  <section>
    <div class="pad">
      <div class="container">
        <h2>Projects</h2>
      </div>
    </div>
    <div id="feat-proj" class="projects">
      <ProjectCard
        class="card"
        image="abababa"
        title="ababab"
        subtitle="abababababababbbbbbbbbbbbbb"
      />
      <ProjectCard
        class="card"
        image="abababa"
        title="ababab"
        subtitle="abababababababbbbbbbbbbbbbb"
      />
      <ProjectCard
        class="card"
        image="abababa"
        title="ababab"
        subtitle="abababababababbbbbbbbbbbbbb"
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
  overflow-x: scroll;
}

.spacer {
  width: 0.1px;
  height: 0.1px;
  flex-shrink: 0;
  overflow: hidden;
}

.pad {
  padding: 0 $spacer;
}

.card {
  flex-shrink: 0;
  margin: 0 $spacer;
}
</style>
