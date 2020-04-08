<template>
  <section>
    <HeadingMore class="heading" title="Latest Posts" more="/blog/" />
    <div class="container">
      <PostPreview
        class="post"
        v-for="edge in $static.posts.edges"
        v-bind:key="edge.id"
        v-bind="edge.node"
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
import HeadingMore from "@/components/HeadingMore.vue";
import PostPreview from "@/components/PostPreview.vue";

export default {
  components: {
    HeadingMore,
    PostPreview
  }
};
</script>

<style scoped lang="scss">
section {
  padding: $spacer;
}

.post {
  margin-bottom: $spacer;
}

.container {
  margin-top: $spacer;
}
</style>
