<template>
  <section>
    <HeadingMore class="heading" title="Latest Posts" more="/blog" />
    <div class="pad">
      <div class="container">
        <PostPreview
          v-for="(post, key) in posts"
          :key="key"
          class="post"
          v-bind="post.attributes"
          :brief="null"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HeadingMore from '@/components/HeadingMore.vue'
import PostPreview from '@/components/PostPreview.vue'

export default {
  components: {
    HeadingMore,
    PostPreview
  },
  computed: {
    posts() {
      return this.$store.state.posts.slice(0, 3)
    }
  }
}
</script>

<style scoped lang="scss">
.pad {
  padding: $spacer;
}

.desc {
  margin: 0;
  color: $colour-secondary;
}

.post {
  display: block;
}

a {
  text-decoration: none;
}

article {
  margin-bottom: $spacer;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
