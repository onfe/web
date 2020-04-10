<template>
  <Layout>
    <PageTitle title="All Projects" />
    <div class="projects">
      <div class="container">
        <ProjectCard
          class="card"
          v-for="edge in $page.projects.edges"
          :key="edge.id"
          :image="edge.node.image"
          :title="edge.node.title"
          :subtitle="edge.node.subtitle"
          :url="edge.node.url"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  projects: allProject {
    edges {
      node {
        title
        image (width: 471)
        subtitle
        url
        path
      }
    }
  }
}
</page-query>

<script>
import PageTitle from "~/components/PageTitle.vue";
import { formattedDate } from "~/assets/js/utils.js";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
    PageTitle
  },
  methods: {
    formatDate(date) {
      return formattedDate(date);
    }
  }
};
</script>

<style scoped lang="scss">
.projects {
  padding: $spacer;
}

.container {
  display: grid;
  grid-gap: $spacer;
  grid-template-columns: 1fr;

  @include sm {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
