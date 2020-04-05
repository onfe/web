<template functional>
  <div class="social">
    <div class="collection" group="ID">
      <a class="item" aria-label="Keybase" style="--hovcol: #ff6f21;" href="#"
        ><font-awesome-icon :icon="['fab', 'keybase']"
      /></a>
    </div>
    <div class="collection" group="Social">
      <a class="item" aria-label="Twitter" style="--hovcol: #1da1f3;" href="#"
        ><font-awesome-icon :icon="['fab', 'twitter']"
      /></a>
      <a class="item" aria-label="YouTube" style="--hovcol: #ff0000;" href="#"
        ><font-awesome-icon :icon="['fab', 'youtube']"
      /></a>
      <a class="item" aria-label="LinkedIn" style="--hovcol: #0a66c2;" href="#"
        ><font-awesome-icon :icon="['fab', 'linkedin']"
      /></a>
    </div>
    <div class="collection" group="Portfolio">
      <a class="item" aria-label="GitHub" style="--hovcol: #fff;" href="#"
        ><font-awesome-icon :icon="['fab', 'github']"
      /></a>
      <a class="item" aria-label="GitLab" style="--hovcol: #fc9403;" href="#"
        ><font-awesome-icon :icon="['fab', 'gitlab']"
      /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$colour-social-grouping: $colour-dark-secondary;

.social,
.collection {
  display: flex;
  flex-direction: row;
}

.collection {
  position: relative;
  padding-top: 1.25em;

  > *::before,
  > *::after,
  &::before,
  &::after {
    display: block;
    content: "";
    position: absolute;
  }

  &::before {
    content: attr(group);
    font-size: 0.65em;
    color: $colour-social-grouping;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  &::after {
    width: 1px;
    top: 1rem;
    left: 50%;
    height: 0.25rem;
    background: $colour-social-grouping;
  }
}

.item {
  width: 2em;
  height: 2em;
  padding: $spacer / 2;
  color: $colour-social-grouping;
  transition: color 400ms ease-in-out;
  position: relative;

  &:hover {
    color: var(--hovcol);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  &::after {
    width: 1px;
    top: 0;
    left: 50%;
    background: $colour-social-grouping;
    height: 0.25rem;
  }

  &:not(:first-child):not(:last-child)::before {
    height: 1px;
    top: 0;
    left: 0;
    background: $colour-social-grouping;
    width: 100%;
  }

  &:not(:last-child)::before {
    height: 1px;
    top: 0;
    left: 50%;
    background: $colour-social-grouping;
    width: 50%;
  }
  &:not(:first-child)::before {
    height: 1px;
    top: 0;
    left: 0;
    background: $colour-social-grouping;
    width: 50%;
  }
}
</style>
