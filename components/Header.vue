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
    <portal-target
      class="portal"
      name="header"
      transition="TransitionHeight"
    >
    </portal-target>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  background: $colour-dark;
  color: $colour-white;
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
  color: $colour-white;
  position: relative;
  text-shadow: -3px 0px 0px $colour-dark, 3px 0px 0px $colour-dark;
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
    background: $colour-blue;
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }

  &.nuxt-link-exact-active::before {
    width: 100%;
    left: 0;
    background: $colour-yellow;
  }
}
</style>
