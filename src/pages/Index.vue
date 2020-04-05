<template>
  <Layout>
    <Hero />
    <div class="long">
      Body text
    </div>
    <div class="long">
      Body text
    </div>
    <div class="long">
      Body text
    </div>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue';
export default {
  components: {
    Hero
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}

.long {
  padding: 50vh $spacer;
}
</style>
