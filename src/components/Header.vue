<template>
  <header>
    <div class="main">
      <nav class="container">
        <n-link to="/" class="onfe">
          ONFE
        </n-link>
        <div class="links">
          <n-link to="/blog/">Blog</n-link>
          <n-link to="/projects/">Projects</n-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@include onfe(".onfe");
header {
  width: 100%;
  background: var(--colour-header);
  color: var(--colour-text);
}

.main {
  padding: $spacer;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.links {
  display: flex;
  flex-direction: row;
}

.links a {
  text-decoration: none;
  margin: $spacer / 4;
  color: var(--colour-text);
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(100% - 0.1em);
    left: 50%;
    width: 0;
    height: 0.05em;
    z-index: -1;
    transition: all 300ms ease-in-out;
    background: var(--colour-blue);
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }

  &.nuxt-link-exact-active::before {
    width: 100%;
    left: 0;
    background: var(--colour-yellow);
  }
}
</style>
