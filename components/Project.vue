<template lang="html">
  <section>
    <div class="project">
      <div class="img">
        <ProgImg class="card" :src="image" :ratio="16 / 9" />
      </div>
      <div class="info">
        <div class="titlebar">
          <h2>{{ title }}</h2>
          <span class="year">{{ year }}</span>
        </div>
        <p class="lead">
          {{ subtitle }}
        </p>
        <p>
          {{ description }}
        </p>
        <div class="links">
          <a
            v-for="(link, key) in links"
            :key="key"
            :class="`${link.type} btn btn-block`"
            :href="link.url"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
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
      default: 'Untitled Subtitle'
    },
    image: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '#'
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: -1
    },
    links: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    year() {
      return typeof this.date === 'object' ? this.date.getFullYear() : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  padding-bottom: $spacer;

  @include sm {
    flex-direction: row;
  }
}

.titlebar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }

  .year {
    color: $colour-secondary;
  }
}

.lead {
  font-size: 1.125em;
  margin: 0;
  color: $colour-secondary;
}

.img {
  overflow: hidden;
  width: 100%;
  align-self: center;

  @include sm {
    flex: 0 0 40%;
  }
}

.info {
  padding-top: $spacer;
  height: auto;

  @include sm {
    padding: 0;
    padding-left: $spacer;
    flex: 1 1 60%;
  }
}

.links {
  display: flex;
  flex-direction: row;
  width: calc(100% + #{$spacer});
  margin: 0 -$spacer / 2;

  a {
    flex: 1 0;
    margin: $spacer / 2 $spacer / 2;
  }

  .primary {
    background: $colour-blue;
    color: $colour-white;
  }

  .secondary {
    border: 2px solid $colour-blue;
    color: $colour-blue;
    padding: calc(#{$spacer / 2} - 2px);
  }
}

h2 {
  margin: 0;
}
</style>
