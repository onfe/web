<template>
  <header>
    <div class="wrap">
      <g-link to="/" class="back"> <span>←</span>Back to main site </g-link>
      <h1>Edward Hails</h1>
      <ul>
        <li><a href="https://onfe.uk">onfe.uk</a></li>
        <li><a href="https://github.com/onfe">github.com/onfe</a></li>
        <li>
          <a href="mailto:edward@onfe.uk">edward@onfe.uk</a>
        </li>
        <li>+44 7462 559296</li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.back {
  position: absolute;
  top: 0;
  display: block;
  padding: $resume-unit / 2 $resume-unit;
  background: var(--colour-background);
  text-decoration: none;

  span {
    display: inline-block;
    padding-right: 1ch;
  }

  &:hover {
    text-decoration: underline;
  }
}

.wrap {
  width: 100%;
  max-width: 297mm;
  margin: 0 auto;
  padding: 2 * $resume-unit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * {
    background: var(--colour-background);
  }
}

header {
  padding-top: 2 * $resume-unit;

  background-image: url("../../assets/img/resume-header-blue.svg?inline");
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
    position: relative;
    margin-left: $resume-unit;

    @include md {
      margin-left: $resume-unit * 2;

      &::before {
        content: "·";
        position: absolute;
        top: 0;
        left: -$resume-unit;
      }
    }

    @media print {
      margin-left: $resume-unit * 2;

      &::before {
        content: "·";
        position: absolute;
        top: 0;
        left: -$resume-unit;
      }
    }
  }

  li a {
    text-decoration: none;
  }
}

@media print {
  header {
    padding-top: 0;
  }

  .back {
    display: none;
  }
}
</style>
