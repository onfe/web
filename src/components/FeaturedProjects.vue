<template>
  <section>
    <HeadingMore class="heading" title="Featured Projects" link="/projects/" />
    <div class="container">
      <div id="feat-proj" class="projects">
        <ProjectCard
          class="card"
          v-for="edge in $static.projects.edges"
          :key="edge.id"
          :image="edge.node.image"
          :title="edge.node.title"
          :subtitle="edge.node.subtitle"
          :url="edge.node.url"
        />
        <div class="spacer"><!-- Fix padding being eaten on overflow-x --></div>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  projects: allProject(limit: 3) {
    edges {
      node {
        title
        image (width: 350)
        subtitle
        url
        path
      }
    }
  }
}
</static-query>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
import HeadingMore from "~/components/HeadingMore.vue";

export default {
  components: {
    HeadingMore,
    ProjectCard
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 0 $spacer;
}

section /deep/ .heading {
  margin-top: $spacer;
}

.projects {
  display: flex;
  position: relative;
  padding: $spacer;
  margin: 0 #{-$spacer};
  overflow-x: scroll;
  overflow-y: visible;
  justify-content: space-between;

  @include sm {
    margin: 0;
    padding: $spacer 0;
    overflow: visible;
  }

  > /deep/ .card {
    flex: none;
    margin-right: $spacer;
    width: 14em;

    @include sm {
      flex: auto;

      // spacer is 1st last child
      &:nth-last-child(2) {
        margin: 0;
      }
    }
  }
}

.spacer {
  flex-shrink: 0;
  width: 0.1px;
  height: 0.1px;

  @include sm {
    display: none;
  }
}
</style>
