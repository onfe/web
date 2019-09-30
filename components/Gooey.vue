<template>
  <div class="goo">
    <svg class="hide" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
    <canvas id="js-goo-anim">
      :(
    </canvas>
    <div class="overlay"></div>
  </div>
</template>

<script>
import Gooey from '@/assets/js/gooey.js'

export default {
  data() {
    return {
      goo: null
    }
  },
  mounted() {
    const canvas = document.getElementById('js-goo-anim')
    this.goo = new Gooey(canvas)
  },
  destroyed() {
    this.goo.unhook()
  }
}
</script>

<style lang="scss" scoped>
#js-goo-anim {
  -webkit-filter: url('#goo-filter');
  filter: url('#goo-filter');
  height: 100%;
  width: 66%;
  margin-left: 34%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
      $colour-dark 0%,
      #0000 calc(0% + 2em),
      #0000 calc(100% - 2em),
      $colour-dark 100%
    ),
    linear-gradient(
      90deg,
      $colour-dark 34%,
      #0000 calc(34% + 5em),
      #0000 calc(100% - 2em),
      $colour-dark 100%
    );
}

.goo {
  width: 100%;
}

.hide {
  width: 0;
  height: 0;
  position: absolute;
}
</style>
