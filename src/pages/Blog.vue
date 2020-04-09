<template>
  <Layout>
    <PageTitle title="All Posts" />
    <div class="container">
      <PostPreview
        class="post"
        v-for="edge in $page.posts.edges"
        v-bind:key="edge.id"
        v-bind="edge.node"
        :date="formatDate(edge.node.date)"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(sortBy: "date", order: DESC) {
    edges {
      node {
        title
        path
        lead
        date
        timeToRead
      }
    }
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import { formattedDate } from "~/assets/js/utils.js";
import PostPreview from "@/components/PostPreview.vue";

export default {
  components: {
    PostPreview,
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
section {
  padding: $spacer;
}

.container {
  margin-top: $spacer;

  > * {
    margin-bottom: $spacer;
  }
}
</style>
