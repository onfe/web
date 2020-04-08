<template functional>
  <div class="post-header">
    <div class="container">
      <div class="meta">{{ props.timeToRead }} min read • {{ props.date }}</div>
      <h1>{{ props.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    timeToRead: {
      type: Number,
      default: -1
    },
    date: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.meta {
  margin-bottom: $spacer / 2;
  font-size: 0.85rem;
  color: var(--colour-d-secondary);
}
.post-header {
  padding: $spacer;
  background: var(--colour-d-background);
  color: var(--colour-d-primary);
}

.text {
  padding: $spacer;
}

h1 {
  font-size: 1.5 * $spacer;
}
</style>
