<template>
  <transition
    class="transition-height"
    name="height"
    mode="out-in"
    @before-leave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  data() {
    return {
      prevHeight: -1,
      oldElem: null,
      state: 'waiting'
    }
  },
  methods: {
    beforeLeave(e) {
      this.prevHeight = getComputedStyle(e).height
      this.oldElem = e
      this.state = 'waiting';
      setTimeout(this.cleanup.bind(this), 50)
    },
    enter(e) {
      const wasEmpty = this.state === 'empty';
      this.state = 'full';
      if (this.oldElem || !e) {
        this.oldElem.style.display = `none`;
      }

      if (this.prevheight === -1) return;
      const height = getComputedStyle(e).height

      e.style.height = wasEmpty ? `0px` : this.prevHeight;

      setTimeout(() => {
        e.style.height = height;
      })
    },
    afterEnter(e) {
      e.style.height = null;
    },
    cleanup() {
      // when the new portal state does not have any elements,
      // enter will never be called. We cleanup instead.
      if ((this.state === 'waiting') && this.oldElem) {
        this.oldElem.style.opacity = 0;
        this.oldElem.style.height = getComputedStyle(this.oldElem).height;
        this.state = 'empty';
        setTimeout(() => {
          this.oldElem.style.height = 0;
        }, 20)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.transition-height {
  overflow: hidden;
}
.height-enter-active,
.height-leave-active {
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}
</style>
