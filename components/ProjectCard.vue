<template>
  <a :href="url" class="card">
    <ProgImg src="~/assets/img/placeholder.jpg" class="card-img" alt="" />
    <div class="card-body">
      <h3>{{ title }}</h3>
      {{ subtitle }}
    </div>
  </a>
</template>

<script>
import ProgImg from '@/components/ProgImg.vue'

export default {
  components: {
    ProgImg
  },
  props: {
    title: {
      type: String,
      default: 'Untitled'
    },
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet.'
    },
    image: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: block;
  text-decoration: none;
}
</style>
