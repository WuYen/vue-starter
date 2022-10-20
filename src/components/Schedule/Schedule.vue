<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: { Card, NextRound },
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
  methods: {
    log(item) {
      console.log("log", item);
    },
  },
  async created() {
    try {
      var result = await this.$store.dispatch("schedule/getSchedule"); // 等待 actionA 完成
      setTimeout(() => {
        this.loading = false;
      }, 600);
      this.error = null;
      console.log("created");
    } catch (error) {
      this.error = error;
      this.loading = false;
      console.log("created with error", error);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
