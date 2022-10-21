<template>
  <div>
    <div>Arrow</div>
    <div class="title">Next-Round {{ round }}</div>
    <div class="title sub">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    name: String,
    round: String,
  },
};
</script>

<style scoped></style>
