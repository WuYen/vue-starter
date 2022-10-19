<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <Card
      v-for="(race, index) in schedule"
      :key="index"
      :nameGP="race.raceName"
      :track="race.Circuit.circuitName"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  data() {
    return {
      loading: false,
      schedule: null,
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
    fetchData() {
      this.error = this.schedule = null;
      this.loading = true;
      let year = this.$route.params.year || 2022;
      getData(year)
        .then((data) => {
          this.schedule = data.MRData.RaceTable.Races;
        })
        .catch((err) => {
          this.error = err.toString();
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  components: {
    Card,
  },
};

async function getData(year) {
  return fetch(`https://ergast.com/api/f1/${year}/results/1.json`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
