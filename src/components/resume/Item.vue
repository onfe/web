<template>
  <div class="item">
    <div class="title">
      <h3>{{ $props.title }}</h3>
      <span>{{ $props.date }}</span>
    </div>
    <h4 v-if="$props.subtitle != null">{{ $props.subtitle }}</h4>
    <div class="content"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    subtitle: String
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  margin-bottom: $resume-unit * 0.75;
}

.content {
  margin-top: $resume-unit / 4;
}

.title {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 600;
    font-size: $resume-unit * 1.25;
  }

  span {
    display: block;
    color: var(--colour-secondary);
    font-size: $resume-unit;
  }
}

h4 {
  margin-top: 0.25 * $resume-unit;
  color: var(--colour-secondary);
}

::v-deep p {
  margin: 0;
  + p {
    margin-top: 0.25 * $resume-unit;
  }
}
</style>
