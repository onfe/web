<template>
  <section>
    <HeadingMore class="heading" title="Featured Project" link="#" />
    <div class="container card">
        <g-image src="~/assets/img/picto-banner.png" />
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

<style lang="scss" scoped>
section {
  padding: $spacer;
}

.heading {
  padding-bottom: $spacer;
}

.card {
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
}
</style>
