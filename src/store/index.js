import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      push: {
        totalPoints: 0,
        fatigue: 0,
        maxFatigue: 100,
      },
    },
    push: [
      {
        name: "Incline Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 0,
        difficulty: "Beginner",
      },
      {
        name: "Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 1,
        difficulty: "Beginner",
      },
      {
        name: "Diamond Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 2,
        difficulty: "Beginner",
      },
      {
        name: "Pseudo Planche Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 3,
        difficulty: "Beginner",
      },
      {
        name: "Pike Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 4,
        difficulty: "Beginner",
      },
      {
        name: "Decline Pike Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 5,
        difficulty: "Beginner",
      },
      {
        name: "Archer Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 6,
        difficulty: "Beginner",
      },
      {
        name: "Incline One Arm Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 7,
        difficulty: "Intermediate",
      },
      {
        name: "Straddle One Arm Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 8,
        difficulty: "Intermediate",
      },
      {
        name: "Ring Straddle One Arm Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 9,
        difficulty: "Intermediate",
      },
      {
        name: "One Arm Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 10,
        difficulty: "Intermediate",
      },
      {
        name: "Ring One Arm Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 0,
        index: 11,
        difficulty: "Advanced",
      },
      {
        name: "Ring Wall Maltese Push-Up",
        costPerClick: 10,
        valuePerClick: 0.5,
        path: 1,
        index: 12,
        difficulty: "Elite",
      },
    ],
  },
  mutations: {
    addSkillPoints(state, payload) {
      state.user[payload.category].totalPoints += payload.points;
    },
    applyFatigue(state, payload) {
      state.user[payload.category].fatigue += payload.fatigue;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    push(state) {
      return state.push;
    },
  },
  actions: {},
  modules: {},
});
