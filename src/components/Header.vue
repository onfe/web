<template functional>
  <header>
    <nav class="container">
      <g-link to="/" class="onfe"> ONFE </g-link>
      <div class="links">
        <g-link to="/blog/">Blog</g-link>
        <g-link to="/projects/">Projects</g-link>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  background: var(--colour-d-background);
  color: var(--colour-d-primary);
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
  color: var(--colour-d-primary);
  position: relative;
  text-shadow: -2px 0px 0px var(--colour-d-background),
    2px 0px 0px var(--colour-d-background);
  z-index: 0;
  &::before {
    content: "";
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

  &.active::before {
    width: 100%;
    left: 0;
    background: var(--colour-yellow);
  }
}
</style>
