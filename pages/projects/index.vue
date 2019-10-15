<template>
  <div class="">
    <HeroTitle title="Projects" />
    <Completionist />
    <BeautiSearch />
  </div>
</template>

<script>
import HeroTitle from '@/components/HeroTitle.vue'
import Completionist from '@/components/projHeros/completionist.vue'
import BeautiSearch from '@/components/projHeros/beautisearch.vue'

export default {
  components: {
    HeroTitle,
    Completionist,
    BeautiSearch
  }
}
</script>
