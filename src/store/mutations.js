export default {
  addSkillPoints(state, payload) {
    const skill = state.user.skills.find((s) => s.category == payload.category);

    const max = skill.maxFatigue;
    if (skill.fatigue + payload.fatigue <= max)
      skill.totalPoints += payload.points;
  },
  applyFatigue(state, payload) {
    const skill = state.user.skills.find((s) => s.category == payload.category);
    const max = skill.maxFatigue;

    if (skill.fatigue + payload.fatigue <= max)
      skill.fatigue += payload.fatigue;
  },
  upgradeFatigue(state, payload) {
    const skill = state.user.skills.find((s) => s.category == payload.category);
    skill.maxFatigue += payload.fatigue;
  },
};
