<template functional>
  <g-link :class="[data.class, data.staticClass]" :aria-label="`Read Post ${props.title}`" :to="props.path" class="card">
    <article class="card-body">
      <div class="titlebar">
        <h3>{{ props.title }}</h3>
        <div class="meta">{{ props.timeToRead }} min read • {{ props.date }}</div>
      </div>
      <p v-if="props.lead" class="lead">
        {{ props.lead }}
      </p>
    </article>
  </g-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    lead: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: -1
    },
    path: {
      type: String,
      default: ""
    },
    timeToRead: {
      type: Number,
      default: null
    }
  }
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
