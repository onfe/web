<template functional>
<div class="post-footer">
  <div class="container">
    <ul class="tags">
      <li v-for="(tag, key) in props.tags" v-key="key">
        {{ tag }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.post-footer {
  padding: $spacer;
}

.container {
  padding: $spacer 0;
}

ul {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
  color: var(--colour-secondary);
  font-size: 0.85em;

  li {
    display: inline-block;
    padding: $spacer / 4 $spacer / 2;
    background: var(--colour-subtle);
    margin-right: $spacer / 2;
    border-radius: $spacer / 2;
  }
}
</style>
