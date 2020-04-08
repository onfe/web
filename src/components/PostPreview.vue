<template lang="html">
  <g-link :to="path" class="card">
    <article class="card-body">
      <div class="titlebar">
        <h3>{{ title }}</h3>
        <div class="meta">{{ timeToRead }} min read • {{ formattedDate }}</div>
      </div>
      <p v-if="lead" class="lead">
        {{ lead }}
      </p>
    </article>
  </g-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    lead: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: -1,
    },
    path: {
      type: String,
      default: "",
    },
    timeToRead: {
      type: Number,
      default: null,
    },
  },
  computed: {
    formattedDate() {
      // eslint-disable-next-line prettier/prettier
      const date = new Date(this.date)
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const showYear = date.getFullYear() !== new Date().getFullYear();
      const year = showYear ? `, ${date.getFullYear()}` : "";
      return `${months[date.getMonth()]} ${date.getDate()}${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.titlebar {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .meta {
    margin-top: $spacer / 2;
  }

  @include sm {
    flex-direction: row;
    align-items: flex-start;

    .meta {
      margin: 0;
    }
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
  margin-top: $spacer / 2;
  color: var(--colour-secondary);
}

.meta {
  color: var(--colour-secondary);
  font-size: 0.825em;
  flex-shrink: 0;
}
</style>
