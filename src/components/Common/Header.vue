<template>
  <div class="padding">
    <nav class="flex v-center dark">
      <div class="logo">
        <img src="https://www.bing.com/th?id=OSB.pA_kvuoXocgPS5sDNiWD6Q--.png" alt="Formula 1" role="presentation" />
      </div>
      <div class="separator"></div>
      <div class="season">2022 年賽季</div>
    </nav>
    <div class="grid">
      <router-link class="item underline link" :to="'/schedule'">Schedule</router-link>
      <router-link class="item underline link" :to="'/standing/driver'"> Driver Standings</router-link>
      <router-link class="item underline link" :to="'/standing/team'"> Team Standings</router-link>
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

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0px 10px;
  margin-bottom: 20px;
}

.link {
  text-decoration: none;
  color: #787878;
  padding: 10px 0px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.router-link-active {
  position: relative;
  color: #000000;
}

.router-link-active::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #000000;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
