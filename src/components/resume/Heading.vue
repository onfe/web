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
  padding: 2 * $resume-unit;
  padding-top: 4 * $resume-unit;
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
  padding: 0 $resume-unit * 0.75;
  font-weight: 700;
  font-size: 4 * $resume-unit;
  margin-bottom: $resume-unit;
  display: block;
}

ul {
  display: flex;
  padding: $resume-unit / 2 $resume-unit;
  list-style: none;
  margin: 0;
  font-weight: 400;

  * + * {
    margin-left: $resume-unit * 2;
    position: relative;

    &::before {
      content: "·";
      position: absolute;
      top: 0;
      left: -$resume-unit;
    }
  }

  li a {
    text-decoration: none;
  }
}

@media print {
  header {
    padding-top: 2 * $resume-unit;
  }
}
</style>
