<template>
  <main class="pad">
    <div class="info container">
      <h1>{{ attributes.title }}</h1>
      <div v-if="date" class="date">Published {{ date }}</div>
      <hr />
    </div>
    <article class="container">
      <Markticle :markdown="markdown.vue"></Markticle>
    </article>
    <div class="container after">
      <n-link class="more" to="/blog">Back to Blog</n-link>
    </div>
  </main>
</template>

<script>
import Markticle from '@/components/Markticle.vue'

export default {
  components: {
    Markticle
  },
  data() {
    const markdown = require('@/posts/' + this.$route.params.post + '.md')
    return {
      markdown,
      attributes: markdown.attributes
    }
  },
  computed: {
    date() {
      if (!this.attributes.date) {
        return null
      }
      const date = new Date(this.attributes.date)
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    }
  },
  head() {
    return {
      title: this.attributes.title
    }
  }
}
</script>

<style scoped lang="scss">
.pad {
  padding: $spacer;
}

h1,
h2 {
  margin: 0;
}

article {
  padding: $spacer 0;
}

.date {
  color: $colour-secondary;
  font-size: 0.85em;
}

.after {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
