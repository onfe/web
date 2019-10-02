<template>
  <section>
    <HeadingMore class="heading" title="Latest Posts" more="/blog" />
    <div class="pad">
      <div class="container">
        <div class="posts card">
          <div class="card-body">
            Imagine me... having a BLOG?! seems fake but ok.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeadingMore from '@/components/HeadingMore.vue'

export default {
  components: {
    HeadingMore
  }
}
</script>

<style scoped lang="scss">
.pad {
  padding: $spacer;
}
</style>
