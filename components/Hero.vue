<template>
  <section>
    <client-only>
      <Gooey class="aside" />
    </client-only>
    <div class="container hero">
      <div class="focus">
        <p class="title">Hi, I'm <span class="special">Edward Hails</span>,</p>
        <p>an IoT, Vue.js and C++ developer.</p>
      </div>
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
  font-size: 1em;
  width: 66%;
  z-index: 0;

  .title {
    font-size: 1.75em;
  }

  .special {
    position: relative;
    color: $colour-yellow;
    white-space: nowrap;
  }

  p {
    margin: 0;
    z-index: 5;
  }

  @include sm {
    font-size: 1.25em;
  }

  @include lg {
    font-size: 1.5em;
  }
}

.extra {
  width: 34%;
}
</style>
