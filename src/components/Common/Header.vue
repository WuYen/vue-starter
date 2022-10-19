<template>
  <div class="padding">
    <nav class="flex v-center dark">
      <div class="logo">
        <img
          src="https://www.bing.com/th?id=OSB.pA_kvuoXocgPS5sDNiWD6Q--.png"
          alt="Formula 1"
          role="presentation"
        />
      </div>
      <div class="separator"></div>
      <div class="season">2022 年賽季</div>
    </nav>
    <div class="flex">
      <div class="item">
        <router-link :to="'/schedule'">Schedule</router-link>
      </div>
      <div class="item">
        <router-link :to="'/standing'">Standing</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.flex {
  display: flex;
}
.v-center {
  align-items: center;
}
.separator::before {
  content: "|";
  display: inline;
  font-size: 2rem;
  line-height: 2rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  vertical-align: 0.2rem;
}
.logo {
  max-width: 5rem;
  line-height: 1;
  top: 4px;
  position: relative;
  padding-left: 10px;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.dark {
  background-color: #111111;
  color: #ffffff;
}
</style>
