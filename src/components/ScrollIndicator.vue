<template>
  <div v-if="showRead" class="read">
    <div :style="{ maxWidth: read + '%' }" class="indicator"></div>
  </div>
</template>

<script>
import { throttle } from "lodash";

export default {
  data() {
    return {
      read: 0,
      showRead: false
    };
  },
  mounted() {
    document.addEventListener(
      "scroll",
      throttle(this.updateRead.bind(this), 100)
    );
    this.showRead = document.body.clientHeight * 2 < document.body.scrollHeight;
  },
  methods: {
    updateRead() {
      const h = document.documentElement;
      const b = document.body;
      const st = "scrollTop";
      const sh = "scrollHeight";

      this.read =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
.read {
  width: 100%;
  height: 4px;
  position: sticky;
  top: 0;
  z-index: 100;

  .indicator {
    height: 100%;
    max-width: 0;
    background: $colour-blue;
    transition: max-width 100ms;
  }
}
</style>
