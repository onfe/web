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
    <canvas ref="canvas">
      :(
    </canvas>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goo: null
    }
  },
  async mounted() {
    const Gooey = (await import('~/assets/js/gooey.js')).default
    this.goo = new Gooey(this.$refs["canvas"]);
  },
  destroyed() {
    if (this.goo) {
      this.goo.unhook();
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  -webkit-filter: url('#goo-filter');
  filter: url('#goo-filter');
  height: 100%;
  width: 100%;
  @include sm {
    width: 66%;
    margin-left: 34%;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
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
