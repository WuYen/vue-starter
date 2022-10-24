import api from "../../api/index";

// initial state
const state = () => ({
  season: 2022,
  schedule: [],
});

// getters
const getters = {
  getNext(state) {
    var diffdate = new Date();
    var result = state.schedule.filter((x) => {
      return new Date(x.date) - diffdate > 0;
    });
    return result[0];
  },
};

// actions
const actions = {
  async getSchedule(handler, payload) {
    const { commit } = handler;
    const { year = 2022 } = payload;
    const response = await api.getSchedule(year);
    commit("setSchedule", response.MRData.RaceTable);
    return response.MRData.RaceTable;
  },
};

// mutations
const mutations = {
  setSchedule(state, payload) {
    state.schedule = payload.Races;
    state.season = payload.season;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
