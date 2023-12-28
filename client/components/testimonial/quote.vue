<script setup lang="ts"></script>

<template>
  <blockquote class="testimonial">
    <p>Ruthie makes happy hair</p>
    <cite>Carrie, Pasadena, CA</cite>
  </blockquote>
</template>

<style lang="scss" scoped>
.testimonial {
  color: black;
  margin: auto;
  position: relative;
  padding: 2rem 2rem;

  p {
    font-size: var(--heading-medium);
    line-height: 1.15;
    font-weight: 400;
    @include font-smoothing;
    font-family: var(--font-heading);
    font-style: italic;
    position: relative;
    color: currentColor;
    margin: 0;
    z-index: 1;
    padding-left: 1rem;

    &::before,
    &::after {
      font-family: inherit;
      font-style: none;
    }
    &::before {
      content: "“";
      position: absolute;
      left: -0.25em;
    }
    &::after {
      content: "”";
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--olive);
    border-radius: 8px;
    z-index: 0;
  }

  cite::before {
    content: "— ";
  }

  cite {
    display: block;
    margin-top: 1rem;
    font-size: var(--body-xsmall);
    font-style: normal;
    position: relative;
    z-index: 1;
  }
}
</style>
