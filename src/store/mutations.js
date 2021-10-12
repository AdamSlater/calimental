export default {
  addSkillPoints(state, payload) {
    state.user[payload.category].totalPoints += payload.points;
  },
  applyFatigue(state, payload) {
    state.user[payload.category].fatigue += payload.fatigue;
  },
};
