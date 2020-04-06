<template functional>
  <footer>
    <div class="container footer">
      <div class="left">
        &copy; Edward Hails (<a href="/keybase.txt">Verify</a>)
        {{ new Date().getFullYear() }}
      </div>
      <div class="center">
        <g-link to="/"><div class="onfe">O</div></g-link>
      </div>
      <div class="right">
        Code snips are
        <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY</a>
        unless noted.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: $spacer;
  background: var(--colour-d-background);
  color: var(--colour-d-secondary);
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
