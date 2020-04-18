<template functional>
  <footer>
    <ul class="container footer">
      <li class="left">
        &copy; Edward Hails (<a href="https://keybase.io/onfe">Verify</a>)
        {{ new Date().getFullYear() }}
      </li>
      <li class="center">
        <g-link to="/"><div class="onfe">O</div></g-link>
      </li>
      <li class="right">
        <a href="https://en.wikipedia.org/wiki/Snippet_(programming)">Snips</a>
        are
        <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY</a>
        unless noted.
      </li>
    </ul>
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
  padding: 0;
  list-style: none;
}

.center > a {
  text-decoration: none;
}

.left,
.right {
  font-size: 0.875em;
  text-align: center;
  @include sm {
    width: 50%;
  }
}

.center {
  padding: 0 $spacer;
  display: none;
  @include sm {
    display: block;
  }
}

@include sm {
  .right {
    text-align: right;
  }

  .left {
    text-align: left;
  }
}
</style>
