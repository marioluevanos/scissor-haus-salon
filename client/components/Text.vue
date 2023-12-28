<script setup lang="ts">
import { h } from "vue";

const slots = defineSlots<{
  default(): any;
}>();

const props = defineProps<{
  class?: string;
  weight?: "400" | "600" | "700";
  tag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "q"
    | "p"
    | "a"
    | "div"
    | "span"
    | "strong"
    | "figcaption"
    | "label"
    | "ul"
    | "li";
  size?:
    | "heading-xxlarge"
    | "heading-xlarge"
    | "heading-large"
    | "heading-medium"
    | "heading-small"
    | "heading-xsmall"
    | "body-xlarge"
    | "body-large"
    | "body"
    | "body-small"
    | "body-xsmall"
    | "body-xxsmall";
}>();

const className = !props.class ? "" : props.class + " ";
const fontWeight = !props.weight ? "" : ` weight-${props.weight}` + " ";
const VNode = () =>
  h(
    props.tag || "p",
    {
      class: `${className}${props.size}${fontWeight}`,
    },
    slots.default()
  );
</script>

<template>
  <VNode>
    <slot></slot>
  </VNode>
</template>

<style lang="scss" scoped>
.heading-xxlarge {
  font-size: var(--heading-xxlarge);
}
.heading-xlarge {
  font-size: var(--heading-xlarge);
}
.heading-large {
  font-size: var(--heading-large);
}
.heading-medium {
  font-size: var(--heading-medium);
}
.heading-small {
  font-size: var(--heading-small);
}
.heading-xsmall {
  font-size: var(--heading-xsmall);
}
.body-xlarge {
  font-size: var(--body-xlarge);
}
.body-large {
  font-size: var(--body-large);
}
.body {
  font-size: var(--body);
}
.body-small {
  font-size: var(--body-small);
}
.body-xsmall {
  font-size: var(--body-xsmall);
}
.body-xxsmall {
  font-size: var(--body-xxsmall);
}

.weight-400 {
  font-weight: 400;
}

.weight-600 {
  font-weight: 600;
}

.weight-700 {
  font-weight: 700;
}
</style>
