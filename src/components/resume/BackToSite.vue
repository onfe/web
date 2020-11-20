<template>
  <g-link to="/" class="back"> <span>←</span>Back to main site </g-link>
</template>

<style lang="scss">
.back {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 0 0 $spacer * 2;
  display: block;
  padding: $spacer / 2 $spacer;
  background: white;
  text-decoration: none;

  span {
    display: inline-block;
    padding-right: 1ch;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
