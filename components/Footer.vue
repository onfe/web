<template>
  <footer>
    <portal-target name="footer"></portal-target>
    <div class="container footer">
      <div class="left">
        &copy; Edward Hails (<a href="/keybase.txt">Verify</a>) {{ year }}
      </div>
      <div class="center">
        <n-link to="/"><div class="onfe">O</div></n-link>
      </div>
      <div class="right">
        Code snips are
        <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY</a>
        unless noted.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: $spacer;
  background: $colour-dark;
  color: $colour-secondary;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @include sm {
    flex-direction: row;
  }
}

.center > a {
  text-decoration: none;
}

.left,
.right {
  font-size: 0.875em;

  @include sm {
    width: calc(50% - 2em);
  }
}

.center {
  display: none;
  @include sm {
    display: block;
  }
}

.right {
  text-align: right;
}
</style>
