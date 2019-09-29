<template>
  <section>
    <client-only>
      <Gooey class="aside" />
    </client-only>
    <div class="container hero">
      <div class="focus">Intensely curious digital experiences.</div>
    </div>
  </section>
</template>

<script>
import Gooey from '~/components/Gooey.vue'
export default {
  components: {
    Gooey
  }
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  color: $colour-light;
  background: $colour-dark;
  padding: $spacer;
  height: 15em;

  @include sm {
    height: 20em;
  }
}

.hero {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.focus {
  font-size: 1.5em;
  width: 66%;
}

.extra {
  width: 34%;
}
</style>
