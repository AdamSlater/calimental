export default {
  user(state) {
    return state.user;
  },
  skillName(state) {
    return (category, index) => state[category][index].name;
  },
  push(state) {
    return state.push;
  },
  pull(state) {
    return state.pull;
  },
  legs(state) {
    return state.legs;
  },
  core(state) {
    return state.core;
  },
};
