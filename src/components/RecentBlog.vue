<template>
  <section>
    <HeadingMore class="heading" title="Latest Posts" more="/blog/" />
    <div class="container">
      <PostPreview
        class="post"
        v-for="edge in $static.posts.edges"
        v-bind:key="edge.id"
        v-bind="edge.node"
        :date="formatDate(edge.node.date)"
      />
    </div>
  </section>
</template>

<static-query>
query {
  posts: allPost(sortBy: "date", order: DESC limit: 2) {
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
</static-query>

<script>
import { formattedDate } from "~/assets/js/utils.js";
import HeadingMore from "@/components/HeadingMore.vue";
import PostPreview from "@/components/PostPreview.vue";

export default {
  components: {
    HeadingMore,
    PostPreview
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
