<template>
  <div class="">
    <HeroTitle title="Projects" />
    <Completionist />
  </div>
</template>

<script>
import HeroTitle from '@/components/HeroTitle.vue'
import Completionist from '@/components/projHeros/completionist.vue'

export default {
  components: {
    HeroTitle,
    Completionist
  }
}
</script>
