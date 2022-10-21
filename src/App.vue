<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Common/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0px;
  font-size: 1.4rem;
  line-height: 1.357;
  font-family: "segoe ui", "microsoft jhenghei", "microsoft mhei", stheititc,
    sans-serif;
}
</style>
