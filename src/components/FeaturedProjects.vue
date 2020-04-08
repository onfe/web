<template>
  <section>
    <div class="wrap">
      <HeadingMore title="Featured Projects" link="#" />
    </div>
    <div id="feat-proj" class="container projects">
      <ProjectCard
        class="card"
        v-for="edge in $static.projects.edges"
        :key="edge.id"
        :image="edge.node.image"
        :title="edge.node.title"
        :subtitle="edge.node.subtitle"
        :url="edge.node.url"
      />
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
    ProjectCard,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: $spacer 0;
}

.wrap {
  padding: 0 $spacer;
}

.projects {
  display: flex;
  padding: $spacer;
  overflow-x: scroll;
  overflow-y: visible;
  justify-content: space-between;
}

.card {
  flex: none;
  margin-right: $spacer;
  width: 14em;

  @include sm {
    flex: auto;

    &:last-child {
      margin: 0;
    }
  }
}
</style>
