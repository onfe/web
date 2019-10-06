<template>
  <header>
    <nav class="container">
      <n-link to="/" class="onfe">
        ONFE
      </n-link>
      <div class="collapse">
        <n-link to="/blog">Blog</n-link>
        <n-link to="/projects">Projects</n-link>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: $spacer;
  background: $colour-dark;
  color: $colour-white;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.onfe {
  position: relative;
  text-decoration: none;
  font-size: 1.25em;
  margin: -0.2em 0;
  font-family: 'LemonMilk';
  color: $colour-yellow;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: translate(-0.1em, -0.1em);
    text-shadow: 0.1em 0.1em #fff9, 0.2em 0.2em $colour-blue;
  }
}
</style>
