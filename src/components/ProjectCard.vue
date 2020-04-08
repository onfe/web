<template>
  <a :href="url" class="card" :aria-label="`To ${title}`">
    <g-image :alt="`${title} - ${subtitle}`" :src="image" :size="350" class="card-img" />
    <div class="card-body">
      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled"
    },
    subtitle: {
      type: String,
      default: "Untitled Subtitle"
    },
    image: {
      type: Object,
      default() {
        return {};
      }
    },
    url: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  display: block;
}

.card-img {
}

p {
  margin: 0;
  margin-top: $spacer / 2;
  color: var(--colour-secondary);
}
</style>
