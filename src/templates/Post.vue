<template>
  <Layout>
    <div id="guide" v-html="$page.post.content" />
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

<style lang="css" scoped></style>
