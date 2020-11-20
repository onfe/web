<template>
  <section>
    <h2>{{ this.$props.title }}</h2>
    <div>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 0.25 * $resume-unit;
}

h2 {
  width: 8 * $resume-unit;
  margin-right: $resume-unit * 2;
  font-size: $resume-unit * 1.25;
  flex-shrink: 0;
}

div {
  flex-grow: 1;
}

::v-deep p {
  margin: 0;
  + p {
    margin-top: 0.25 * $resume-unit;
  }
}
</style>
