<script>
import ProgImg from '@/components/ProgImg.vue'

export default {
  name: 'Markticle',
  components: {
    ProgImg
  },
  props: {
    markdown: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    /*
      This is a bit naughty, we're using new Function() to evaluate the MD obj.
      This is vunerable to client side injection, so we should ensure the
      codebase does not end up with unescaped code in the markdown posts.
    */

    // eslint-disable-next-line no-new-func
    this.renderFunc = new Function(this.markdown.render)()
    // eslint-disable-next-line no-new-func
    this.$options.staticRenderFns = new Function(
      this.markdown.staticRenderFns
    )()
  },
  render(h) {
    return this.renderFunc ? this.renderFunc() : h('div')
  }
}
</script>

<style scoped lang="scss">
.prog-image {
  border-radius: $spacer / 2;
  box-shadow: $subtle-shadow;
  overflow: hidden;
  max-height: 30em;
  max-width: 40em;
  margin: 0 auto;

  img {
    display: block;
  }
}

pre {
  padding: $spacer;
  border-radius: $spacer / 2;
}
</style>
