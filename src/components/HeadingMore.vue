<template functional>
  <div class="heading" :class="[data.class, data.staticClass]">
    <div class="container split">
      <h2>{{ props.title }}</h2>
      <g-link :to="props.link" class="more">more<span>→</span></g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    link: String
  }
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
  color: var(--colour-focus);
  text-decoration: none;

  span {
    display: inline-block;
    transition: transform 300ms ease-in-out;
    padding-left: 0.5ex;
  }

  &:hover {
    text-decoration: underline;
  }

  &:hover > span {
    transform: translate(0.5ex);
  }
}
</style>
