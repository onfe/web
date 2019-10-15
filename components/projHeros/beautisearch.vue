<template>
  <section class="proj-hero beautisearch">
    <div class="container">
      <div class="logo-wrap">
        <div class="logo">
          <div class="circle one"></div>
          <div class="circle two"></div>
          <div class="circle three"></div>
          <img src="/media/beautisearch.svg" alt="" />
        </div>
      </div>
      <div class="detail">
        <div class="card">
          <div class="card-body">
            <div class="text">
              <p>BeautiSearch is the new, new tab.</p>
              <p>Use the search providers you love, in a sleek new style.</p>
            </div>
            <a href="https://www.beautisear.ch/" class="btn btn-block">
              Enhance your tabs »
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$bs-colour: #0391a1;

section {
  padding: 0 $spacer;
  background: $bs-colour;
  overflow: hidden;
}

img {
  height: 4.5em;
  z-index: 5;

  @include sm {
    height: 5.5em;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: $spacer;

  @include sm {
    flex-direction: row;
    justify-content: space-between;
    padding: $spacer 0;
  }
}

.detail {
  width: 100%;
  @include sm {
    width: 20em;
  }
}

.card {
  background: $colour-white;
  z-index: 5;
}

.btn {
  background: $bs-colour;
  color: $colour-white;
}

p {
  margin: 0;
  margin-bottom: 1em;
}

.logo-wrap {
  @include sm {
    width: calc(100% - 20em);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.logo {
  margin: -6 * $spacer 0;
  background: mix($bs-colour, #fff5);
  width: 18em;
  height: 18em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @include sm {
    width: 25em;
    height: 25em;
    margin: -10 * $spacer;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
  }

  .circle.one {
    z-index: 3;
    width: 50%;
    height: 50%;
    background: $colour-light;
  }

  .circle.two {
    z-index: 2;
    width: 66%;
    height: 66%;
    background: mix($bs-colour, #ffff);
  }

  .circle.three {
    z-index: 2;
    width: 82%;
    height: 82%;
    background: mix($bs-colour, #fff8);
  }
}
</style>
