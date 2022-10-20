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
    //   .sort(function (a, b) {
    //     var distancea = Math.abs(diffdate - new Date(a.date));
    //     var distanceb = Math.abs(diffdate - new Date(b.date));

    //     return distancea - distanceb; // sort a before b when the distance is smaller
    //   });
    console.log("getter getNext", result[0]);
    return result[0];
  },
};

// actions
const actions = {
  async getSchedule({ commit }) {
    const response = await api.getSchedule(2022);
    console.log("getSchedule response", response.MRData.RaceTable.Races);
    commit("setSchedule", response.MRData.RaceTable.Races);
    return response.MRData.RaceTable.Races;
  },
};

// mutations
const mutations = {
  setSchedule(state, payload) {
    console.log("setSchedule", payload);
    state.schedule = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
