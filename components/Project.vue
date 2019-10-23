<template lang="html">
  <section>
    <div class="project card">
      <ProgImg class="img" :src="image" :ratio="16 / 9" />
      <div class="info card-body">
        <div class="titlebar">
          <h2>{{ title }}</h2>
          <span class="year">{{ year }}</span>
        </div>
        <p class="lead">
          {{ subtitle }}
        </p>
        <p class="detail">
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
  margin-bottom: $spacer;

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
  font-size: 1em;
  margin: 0;
  color: $colour-secondary;
}

.detail {
  margin: $spacer / 2 0;

  @include sm {
    display: none;
  }

  @include md {
    display: block;
  }
}

.img {
  overflow: hidden;
  width: 100%;
  align-self: center;

  @include sm {
    flex: 0 0 45%;
  }

  @include lg {
    flex: 0 0 40%;
  }
}

.info {
  height: auto;

  @include sm {
    flex: 0 0 55%;
  }

  @include lg {
    flex: 0 0 60%;
  }
}

.links {
  display: flex;
  flex-direction: row;
  width: calc(100% + #{$spacer});
  margin: 0 -$spacer / 2;
  margin-top: $spacer / 2;

  a {
    flex: 1 0;
    margin: $spacer / 2 $spacer / 2;
  }

  .primary {
    background: $colour-light;
    color: $colour-dark;
  }

  .secondary {
    border: 2px solid $colour-light;
    color: $colour-dark;
    padding: calc(#{$spacer / 2} - 4px);
  }
}

h2 {
  margin: 0;
}
</style>
