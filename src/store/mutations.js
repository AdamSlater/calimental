export default {
  addSkillPoints(state, payload) {
    const skill = state.user.skills.find((s) => s.category == payload.category);
    skill.totalPoints += payload.points;
  },
  applyFatigue(state, payload) {
    const skill = state.user.skills.find((s) => s.category == payload.category);
    skill.fatigue += payload.fatigue;
  },
  upgradeFatigue(state, payload) {
    const skill = state.user.skills.find((s) => s.category == payload.category);
    skill.maxFatigue += payload.fatigue;
  },
};
