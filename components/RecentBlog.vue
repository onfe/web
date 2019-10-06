<template>
  <section>
    <HeadingMore class="heading" title="Latest Posts" more="/blog" />
    <div class="pad">
      <div class="container">
        <article v-for="(post, key) in posts" :key="key">
          <nuxt-link :to="`/blog/p/${post.slug}`" class="post card">
            <div class="card-body">
              <h3 class="m-0">{{ post.title }}</h3>
              <p v-if="post.description" class="desc m-0">
                {{ post.description }}
              </p>
            </div>
          </nuxt-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import HeadingMore from '@/components/HeadingMore.vue'

export default {
  components: {
    HeadingMore
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
