<template>
  <div class="card">
    <div class="body">
      <div class="title">{{ nameGP }}</div>
      <div class="title sub">{{ track }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["nameGP", "track"],
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
}

.body {
  padding: 1.25rem;
}

.title {
  text-transform: capitalize;
  font-weight: 600;
}

.title.sub {
  margin-top: 10px;
  font-size: 14px;
  color: #787878;
}
</style>
