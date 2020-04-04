<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import Header from "~/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style></style>
