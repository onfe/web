<template>
  <header>
    <nav class="container">
      <n-link to="/" class="onfe">
        ONFE
      </n-link>
      <div class="collapse">
        <n-link to="/blog/">Blog</n-link>
        <n-link to="/projects/">Projects</n-link>
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
</style>
