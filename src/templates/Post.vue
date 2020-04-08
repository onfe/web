<template>
  <Layout>
    <article>
      <div class="container">
        <div v-html="$page.post.content" />
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
article {
  padding: $spacer;
}
</style>
