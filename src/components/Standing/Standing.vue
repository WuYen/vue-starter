<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-for="(item, index) in standing" :key="index" :load="log(item)">
      {{ item.position }}:{{ item.Driver.driverId }} [{{ item.points }}]
    </div>
  </div>
</template>

<script>
// import RaceCard from "./RaceCard";
export default {
  data() {
    return {
      loading: false,
      standing: null,
      error: null,
    };
  },
  created() {
    this.fetchData();
    // watch the params of the route to fetch the data again
    // this.$watch(
    //   () => this.$route.params,
    //   () => {
    //     this.fetchData();
    //   },
    //   // fetch the data when the view is created and the data is
    //   // already being observed
    //   { immediate: true }
    // );
  },
  methods: {
    log(item) {
      console.log("v-for item", item);
    },
    fetchData() {
      this.error = this.standing = null;
      this.loading = true;
      let year = this.$route.params.year || 2022;
      getData(year)
        .then((data) => {
          this.standing =
            data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        })
        .catch((err) => {
          this.error = err.toString();
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  components: {},
};

async function getData(year) {
  return fetch(`https://ergast.com/api/f1/${year}/driverStandings/0.json`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
