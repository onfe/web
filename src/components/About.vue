<template lang="html">
  <section>
    <div class="container">
      <div class="about">
        <g-image alt="Edward Hails" src="~/assets/img/placeholder.png" />
        <h3>Edward Hails</h3>
        <p class="text">
          yada yada description about me
        </p>
        <Social />
      </div>
    </div>
  </section>
</template>

<script>
import Social from "~/components/SocialIcons.vue";
export default {
  components: {
    Social,
  },
};
</script>

<style lang="scss" scoped>
section {
  background: var(--colour-d-background);
  color: var(--colour-d-primary);
  padding: $spacer;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;

  *:not(:last-child) {
    margin-bottom: $spacer;
  }

  p {
    margin: 0;
  }

  img {
    width: 4 * $spacer;
    height: 4 * $spacer;
    border-radius: 100%;
  }
}
</style>
