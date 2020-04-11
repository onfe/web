<template>
  <Layout>
    <PostHeader v-bind="$page.post" :date="fDate" />
    <ScrollIndicator class="scroll-indicator" />
    <article>
      <div class="container">
        <div v-html="$page.post.content" />
      </div>
    </article>
    <PostFooter :tags="$page.post.tags" />
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
    tags
    lead
  }
}
</page-query>

<script>
import { formattedDate } from "~/assets/js/utils.js";
import PostHeader from "~/components/PostHeader.vue";
import ScrollIndicator from "~/components/ScrollIndicator";
const PostFooter = () => import("~/components/PostFooter.vue");
export default {
  components: {
    PostHeader,
    ScrollIndicator,
    PostFooter
  },
  computed: {
    fDate() {
      return formattedDate(this.$page.post.date);
    }
  },
  metaInfo() {
    const title = this.$page.post.title;
    const description = this.$page.post.lead;

    return {
      title: title,
      meta: [
        { key: "description", name: "description", content: description },
        { name: "og:title", key: "og:title", content: title },
        { name: "og:description", key: "og:description", content: description }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/_posts.scss";
</style>
