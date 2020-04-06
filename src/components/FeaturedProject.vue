<template>
  <section>
    <HeadingMore class="heading" title="Featured Project" link="#" />
    <div class="container">
      <a class="card" href="#">
        <g-image src="~/assets/img/picto-banner.png" />
      </a>
    </div>
  </section>
</template>

<script>
import HeadingMore from "@/components/HeadingMore.vue";

export default {
  components: {
    HeadingMore,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: $spacer;
}

.heading {
  padding-bottom: $spacer;
}

.card img {
  display: block;
  width: 100%;
}
</style>
