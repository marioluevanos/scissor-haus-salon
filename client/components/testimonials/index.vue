<script setup lang="ts"></script>

<template>
  <section class="testimonials">
    <Text tag="h2" weight="400" size="heading-xsmall"
      >What our Clients say</Text
    >
    <blockquote class="testimonial">
      <p>Ruthie makes happy hair</p>
      <cite>Carrie, Pasadena, CA</cite>
    </blockquote>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  text-align: center;
  padding: var(--ui-section-p) var(--ui-gutter);
  max-width: var(--ui-maxw-medium);
  margin: 0 auto;
}

.testimonials {
  color: black;
  margin: auto;
  position: relative;
  padding: 4rem 2rem;
  background: var(--color-bg4);
  border-radius: var(--radius-large);

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
    }
    &::after {
      content: "”";
    }
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
