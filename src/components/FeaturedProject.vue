<template>
  <section>
    <HeadingMore class="heading" title="Featured Project" link="/projects/" />
    <div class="container">
      <a class="card" href="https://picto.uk">
        <g-image src="~/assets/img/picto-banner.png" width="960" />
      </a>
    </div>
  </section>
</template>

<script>
import HeadingMore from "@/components/HeadingMore.vue";

export default {
  components: {
    HeadingMore
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: $spacer;

  /deep/ .heading {
    padding-bottom: $spacer;
  }
}

.card img {
  min-height: 10em;
  object-fit: cover;
  display: block;
  width: 100%;
}
</style>
