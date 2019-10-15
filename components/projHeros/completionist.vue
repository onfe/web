<template>
  <section class="proj-hero completionist">
    <div class="container">
      <div class="logo">
        <h2>Completionist</h2>
      </div>
      <div class="detail">
        <div class="card">
          <div class="card-body">
            <div class="text">
              <p>An open-source autocomplete engine, written in C++.</p>
              <p>Lightning fast. Memory efficient.</p>
            </div>
            <a
              href="https://github.com/onfe/Completionist"
              class="btn btn-block"
            >
              View the Source »
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:700&display=swap');

section {
  background: linear-gradient(100deg, #0069ff 70%, #fff calc(70% + 1px));
  overflow: hidden;
  padding: 0 $spacer;

  @include sm {
    background: linear-gradient(90deg, #fff 50%, #0069ff 50%);
  }
}

.container {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: $spacer 0;

  @include sm {
    flex-direction: row-reverse;
    align-items: center;
    background: linear-gradient(100deg, #fff 10em, #0069ff calc(10em + 1px));
  }
}

.logo {
  @include sm {
    text-align: right;
    width: calc(100% - 20em);
    margin: 0;
  }
}

.detail {
  padding-top: $spacer;

  @include sm {
    padding: 0;
    padding-right: $spacer;
    width: 20em;
  }
}

.card {
  background: $colour-white;
}

h2 {
  display: inline-block;
  position: relative;
  font-size: 2em;
  font-weight: 700;
  margin: 0;
  padding: 0 0.2em;
  background: #fff;
  color: #0069ff;
  border-radius: 1em 0 0 1em;

  @include md {
    font-size: 3em;
  }

  @include lg {
    font-size: 4em;
  }
}

h2::after {
  display: block;
  content: '';
  position: absolute;
  left: 99%;
  width: 100vw;
  height: 100%;
  top: 0;
  background: #fff;
}

.btn {
  background: #0069ff;
  color: $colour-white;
}

.text p {
  margin: 0;
  margin-bottom: 1em;
}
</style>
