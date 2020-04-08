<template>
  <Layout>
    <PostHeader v-bind="$page.post" :date="fDate"/>
    <ScrollIndicator class="scroll-indicator"/>
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
    date
    timeToRead
  }
}
</page-query>

<script>
import {formattedDate} from '~/assets/js/utils.js';
import PostHeader from '~/components/PostHeader.vue';
import ScrollIndicator from '~/components/ScrollIndicator';
  export default {
    components: {
      PostHeader,
      ScrollIndicator
    },
    computed: {
      fDate() {
        return formattedDate(this.$page.post.date)
      }
    }
  }
</script>

<style lang="scss">
@import "src/assets/scss/_posts.scss";
</style>
