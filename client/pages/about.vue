<script setup lang="ts">
useSeoMeta({ title: "About Us" });

definePageMeta({
  layout: "default",
});
</script>

<template>
  <section class="root">
    <header class="header">
      <h1 class="title">Our Mission</h1>
      <h2 class="subtitle">
        To provide happiness, confidence, and empowerment. We are focused on
        providing the best professional quality services to our individual
        clients.
      </h2>
    </header>
    <figure class="banner">
      <img src="/about/about-big-1.jpg" alt="about-img" />
    </figure>
    <section class="content">
      <p>
        Scissor Haus Salon is a women-owned salon based in the heart of
        Pasadena, CA. Owner, Ruthie Luevanos has a following of 15 years plus
        clientele because of consistency, passion and love of the beauty
        industry. Cultivated through years of training to create the effortless
        looks everyone deserves. Precision cutting, effortless styling,
        maximizing style and grow out. Trained with Vidal Sassoon Academy in
        hair cutting and color. Bumble and Bumble in New York City style and
        cut. Tony and Guy hair cutting and style are amongst some of the
        training she has received and continues to receive.
      </p>
    </section>

    <section class="content team">
      <div class="text">
        <h2 class="title">The Team</h2>
        <p>
          Our creative, talented stylists have the knowledge and experience to
          develop personalized looks for any mood, attitude, or lifestyle.
        </p>
        <img src="/about/about-group.jpg" alt="About" class="team-image" />
        <p>
          Together, we can re-energize both the way you look and the way you
          feel about yourself.
        </p>
        <p>
          Our team is united by a passion for their craft. We help to enrich our
          clients’ lives by bringing out each person’s natural beauty from
          within.
        </p>
      </div>
    </section>
  </section>
  <div class="cta">
    <nuxt-link href="/services" class="button">See Our Services</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.root {
  max-width: 768px;
  margin: auto;
  padding-top: 90px;
}

.root .header {
  padding: 4rem var(--ui-gutter) 2.5rem;
}

.root .title {
  color: var(--color-primary);
  font-size: var(--heading-xsmall);
  font-weight: 400;
  margin-bottom: 1rem;
}

.root .subtitle {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: var(--heading-small);
  line-height: 1.3;
  color: var(--color-text);
  font-style: italic;
}

.banner {
  margin: 0;
  width: 100%;
  overflow: hidden;

  img {
    width: inherit;
    display: block;
  }
}

.content {
  color: var(--color-text);
  padding: var(--ui-section-p) var(--ui-gutter);
  margin: auto;

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 400;
    @include font-smoothing;
  }
}

.content.team {
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;

  .team-image {
    width: 130%;
    margin: 1rem 0 1.5rem;
    float: left;
    display: block;
  }
}
</style>
