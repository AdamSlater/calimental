export default {
  addSkillPoints(context, payload) {
    context.commit("addSkillPoints", payload);
  },
  upgradeFatigue(context, payload) {
    context.commit("upgradeFatigue", payload);
  },
};
