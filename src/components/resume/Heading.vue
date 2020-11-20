<template>
  <header>
    <h1>Edward Hails</h1>
    <ul>
      <li><a href="https://onfe.uk">onfe.uk</a></li>
      <li><a href="https://github.com/onfe">github.com/onfe</a></li>
      <li>
        <a href="mailto:edward.hails@outlook.com">edward.hails@outlook.com</a>
      </li>
      <li>+44 7462 559296</li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 2 * $spacer;
  padding-top: 4 * $spacer;
  background-image: url("../../assets/img/resume-header.svg?inline");

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * {
    background: white;
    display: inline-block;
  }
}

h1 {
  padding: 0 $spacer * 0.75;
  font-weight: 700;
  font-size: 4 * $spacer;
  margin-bottom: $spacer;
  display: block;
}

ul {
  display: flex;
  padding: $spacer / 2 $spacer;
  list-style: none;
  margin: 0;
  font-weight: 400;

  * + * {
    margin-left: $spacer * 2;
    position: relative;

    &::before {
      content: "·";
      position: absolute;
      top: 0;
      left: -$spacer;
    }
  }

  li a {
    text-decoration: none;
  }
}

@media print {
  header {
    padding-top: 2 * $spacer;
  }
}
</style>
