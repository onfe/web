<template functional>
  <div class="heading">
    <h1 class="container">{{ props.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  padding: $spacer;
  background: var(--colour-d-background);
  color: var(--colour-d-primary);
}

h1 {
  font-size: 1.5rem;
}
</style>
