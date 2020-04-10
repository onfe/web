<template>
  <section>
    <div class="container">
      <div class="about">
        <g-image width="288" alt="Edward Hails" src="~/assets/img/me.jpg" />
        <h3>About me</h3>
        <p>
          I'm <span class="special">Edward Hails</span>; a BSc Computer
          Scientist, Full Stack Software Engineer and avid tea drinker. I push
          the limits of modern browsers, tinker in firmware &amp; design
          beautiful UX.
        </p>
        <Social class="social" />
      </div>
    </div>
  </section>
</template>

<script>
import Social from "~/components/SocialIcons.vue";
export default {
  components: {
    Social
  }
};
</script>

<style lang="scss" scoped>
section {
  background: var(--colour-d-background);
  color: var(--colour-d-primary);
  padding: $spacer;
}

.special {
  color: var(--colour-yellow);
}

.about {
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  grid-template-areas: "I I" "T T" "P P" "S S";
  justify-items: center;
  align-items: center;
  grid-gap: $spacer;

  @include sm {
    justify-items: flex-start;
    grid-template-areas: "I T" "I P" "I S";
  }

  /deep/ .social {
    grid-area: S;
  }
}

img {
  grid-area: I;
  width: 4 * $spacer;
  height: 4 * $spacer;
  border-radius: 100%;

  @include sm {
    margin-right: $spacer;
    width: 8 * $spacer;
    height: 8 * $spacer;
  }
}

h3 {
  grid-area: T;
  font-size: 1.5rem;
}

p {
  grid-area: P;
  text-align: center;
  margin: 0;

  @include sm {
    text-align: left;
  }
}
</style>
