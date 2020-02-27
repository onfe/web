<template>
  <div class="titleHero">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.titleHero {
  width: 100%;
  background: $colour-dark;
  color: $colour-light;
}

.container {
  padding-top: $spacer;
}

h1 {
  font-size: 1.25em;
  margin: 0;

  @include sm {
    font-size: 1.5em;
  }
}
</style>
