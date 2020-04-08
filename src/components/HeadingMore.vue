<template>
  <div class="heading">
    <div class="container split">
      <h2>{{ title }}</h2>
      <g-link :to="link" class="more">more<span>→</span></g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
  },
};
</script>

<style scoped lang="scss">
.split {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.more {
  padding: $spacer / 4 0;
  display: inline-block;
  color: $colour-focus;
  text-decoration: none;

  span {
    display: inline-block;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    text-decoration: underline;
  }

  &:hover > span {
    transform: translate($spacer / 2);
  }
}
</style>
