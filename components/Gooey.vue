<template>
  <div>
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
    // this.goo.unhook()
  }
}
</script>

<style lang="scss" scoped>
#js-goo-anim {
  -webkit-filter: url('#goo-filter');
  filter: url('#goo-filter');
  height: calc(100% - #{2 * $spacer});
  width: 100%;
  margin: $spacer 0;
}

.hide {
  display: none;
}
</style>
