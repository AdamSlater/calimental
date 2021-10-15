<template>
  <div class="px-5 mb-5">
    <h2 class="title is-4">Stats</h2>
    <div class="columns">
      <div class="column" v-for="(skill, index) in user.skills" :key="index">
        <skill-details
          :category="skill.category"
          :skill="skillName(skill.category)"
          :points="skill.totalPoints"
        ></skill-details>
        <h4 class="title is-6 mt-5 mb-1">Fatigue</h4>
        <progress
          class="progress"
          :class="fatigueClass(skill.fatigue)"
          :value="skill.fatigue"
          :max="skill.maxFatigue"
          v-text="skill.fatigue + '%'"
        ></progress>
        <skill-reset-button
          :skill="skill"
          @reset-skill="resetSkill"
        ></skill-reset-button>
      </div>
    </div>
  </div>
</template>

<script>
import skillDetails from "./SkillDetails.vue";
import skillResetButton from "./SkillResetButton.vue";

export default {
  props: ["user"],
  components: {
    skillDetails,
    skillResetButton,
  },
  methods: {
    fatigueClass(val) {
      switch (true) {
        case val <= 50:
          return { "is-success": true };
        case val <= 75:
          return { "is-warning": true };
        case val < 100:
          return "is-danger";
        default:
          return "";
      }
    },
    skillName(category) {
      let index = 0;

      const totalPoints = this.user.skills.find(
        (s) => s.category == category
      ).totalPoints;
      const maxEligibleIndex = Math.floor(totalPoints / 24);
      const skillLength = this.$store.getters.skillLength(category);

      if (maxEligibleIndex < skillLength) {
        index = maxEligibleIndex;
      }

      if (maxEligibleIndex == skillLength) {
        index = skillLength - 1;
      }

      return this.$store.getters.skillName(category, index);
    },
    resetSkill(skill) {
      skill.fatigue = 0;
    },
  },
};
</script>
