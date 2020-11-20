<template>
  <g-link to="/" class="back"> <span>←</span>Back to main site </g-link>
</template>

<style lang="scss">
.back {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 0 0 $resume-unit * 2;
  display: block;
  padding: $resume-unit / 2 $resume-unit;
  background: var(--colour-background);
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
