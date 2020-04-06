<template>
  <section>
    <HeadingMore class="heading" title="Latest Posts" more="/blog/" />
    <div class="container">
      blog
    </div>
  </section>
</template>

<static-query>
query {
  posts: allPost {
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

export default {
  components: {
    HeadingMore,
  },
};
</script>

<style scoped lang="scss">
section {
  padding: $spacer;
}
</style>
