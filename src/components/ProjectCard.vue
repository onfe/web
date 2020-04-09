<template functional>
  <a :href="props.url" class="card" :class="[data.class, data.staticClass]" :aria-label="`To ${props.title}`">
    <g-image
      :alt="`${props.title} - ${props.subtitle}`"
      :src="props.image"
      :size="350"
      class="card-img"
    />
    <div class="card-body">
      <h3>{{ props.title }}</h3>
      <p>{{ props.subtitle }}</p>
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

p {
  margin: 0;
  margin-top: $spacer / 2;
  color: var(--colour-secondary);
}
</style>
