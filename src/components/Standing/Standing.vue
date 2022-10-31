<template>
  <div class="post">
    <Skeleton v-if="loading" class="loading"></Skeleton>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <DriverCard v-if="type == 'DriverStandings'" v-for="(item, index) in standing" :key="index" :item="item" />
      <TeamCard v-if="type == 'ConstructorStandings'" v-for="(item, index) in standing" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import DriverCard from "./DriverCard.vue";
import TeamCard from "./TeamCard.vue";
import Skeleton from "./Skeleton.vue";
export default {
  components: { DriverCard, Skeleton, TeamCard },
  data() {
    return {
      type: '',
      loading: false,
      standing: null,
      error: null,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.standing = null;
        this.loading = true;
        this.error = null;
        this.fetchData();
      },
      { immediate: true }
    );
  },
  methods: {
    log(item) {
      console.log("v-for item", item);
    },
    fetchData() {
      const year = this.$route.params.year || 2022;
      const type = this.$route.params.type == 'driver' ? 'DriverStandings' : 'ConstructorStandings';
      this.type = type;
      getData(type, year)
        .then((data) => {
          this.standing =
            data.MRData.StandingsTable.StandingsLists[0][type];
        })
        .catch((err) => {
          this.error = err.toString();
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 600);
        });
    },
  },

};

async function getData(type, year) {
  return fetch(`https://ergast.com/api/f1/${year}/${type}.json`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
