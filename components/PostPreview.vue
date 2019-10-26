er<template lang="html">
  <article class="card">
    <nuxt-link class="card-body" :to="`/blog/p/${slug}`">
      <div class="titlebar">
        <h2>{{ title }}</h2>
        <span class="meta">{{ mins }} min read • {{ formattedDate }}</span>
      </div>
      <p v-if="lead" class="lead">
        {{ lead }}
      </p>
      <p v-if="brief" class="brief">
        {{ brief }}
      </p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    lead: {
      type: String,
      default: ''
    },
    brief: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: -1
    },
    slug: {
      type: String,
      default: ''
    },
    mins: {
      type: Number,
      default: null
    }
  },
  computed: {
    formattedDate() {
      // eslint-disable-next-line prettier/prettier
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const showYear = this.date.getFullYear() !== new Date().getFullYear()
      const year = showYear ? `, ${this.date.getFullYear()}` : ''
      return `${months[this.date.getMonth()]} ${this.date.getDate()}${year}`
    }
  }
}
</script>

<style lang="scss" scoped>
.titlebar {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @include sm {
    flex-direction: row;
    align-items: center;
  }

  h2 {
    margin: 0;
    font-size: 1.25em;
  }
}

a {
  text-decoration: none;
  display: block;

  &:hover h2 {
    text-decoration: underline;
  }
}

.lead {
  margin: 0;
  margin-top: 0.5em;
  color: $colour-secondary;
}

.brief {
  max-height: 2em;
  position: relative;
  overflow: hidden;
  margin: 0;
  margin-top: 0.5em;

  &:after {
    // show only the first two lines of the brief.
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + 1px);
    background: linear-gradient(to bottom, #0000 0%, #0000 25%, #ffff 100%);
  }
}

.meta {
  color: $colour-secondary;
  font-size: 0.825em;
  flex-shrink: 0;
}
</style>
