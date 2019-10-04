<template>
  <div class="heading">
    <div class="container split">
      <h2 class="m-0">{{ title }}</h2>
      <n-link :to="more" class="more">more</n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Untitled'
    },
    more: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.split {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.heading {
  padding: 0 $spacer;

  @include sm {
    padding: 0;
  }
}
</style>
