<template>
  <div>
    <Skeleton v-if="loading" class="loading"></Skeleton>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <NextRound :name="next.raceName" :round="next.round" />
      <Card
        v-for="race in schedule"
        :key="race.round"
        :nameGP="race.raceName"
        :track="race.Circuit.circuitName"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import NextRound from "./NextRound.vue";
import Skeleton from "./Skeleton.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: { Card, NextRound, Skeleton },
  data() {
    return {
      loading: true,
      error: null,
    };
  },
  computed: {
    ...mapState({
      schedule: (state) => state.schedule.schedule,
    }),
    ...mapGetters("schedule", {
      next: "getNext",
    }),
  },
  async created() {
    try {
      var result = await this.$store.dispatch({
        type: "schedule/getSchedule",
        year: 2022,
      });
      this.error = null;
    } catch (error) {
      this.error = error;
      console.log("created with error", error);
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 600);
      console.log("created");
    }
  },
};
</script>

<style scoped></style>
