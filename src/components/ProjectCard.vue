<template functional>
  <a :href="props.url" class="card">
    <g-image :src="props.image" :size="350" class="card-img" />
    <div class="card-body">
      <h3 class="m-0">{{ props.title }}</h3>
      {{ props.subtitle }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled",
    },
    subtitle: {
      type: String,
      default: "Untitled Subtitle",
    },
    image: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  text-decoration: none;
}
</style>
