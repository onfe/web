<template>
  <main>
    <HeroTitle title="Blog" />
    <section>
      <div class="container posts">
        <PostPreview
          v-for="(post, key) in posts"
          :key="key"
          class="post"
          v-bind="post.attributes"
        />
        <div class="end">
          <a href="#top" class="more top">Back to Top</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import PostPreview from '@/components/PostPreview.vue'
import HeroTitle from '@/components/HeroTitle.vue'

export default {
  components: {
    HeroTitle,
    PostPreview
  },
  head() {
    return {
      title: 'Blog'
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style scoped lang="scss">
.end {
  text-align: center;
}

.post {
  margin-bottom: $spacer;
}

section {
  padding: $spacer;
}
</style>
