<template>
  <div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'push'">
      <skill-button
        category="push"
        index="0"
        :level="skillClass(skill.difficulty)"
        :name="skill.name"
        :value="index == 0 ? 1 : 1.5 ** index"
        :cost="20 * 2 ** index"
        @increment-skill="
          incrementSkill('push', index == 0 ? 1 : 1.5 ** index, 20 * 2 ** index)
        "
        v-for="(skill, index) in pushSkills"
        :key="index"
      ></skill-button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'pull'">
      <skill-button
        category="pull"
        index="0"
        :level="skillClass(skill.difficulty)"
        :name="skill.name"
        :value="index == 0 ? 1 : 1.5 ** index"
        :cost="20 * 2 ** index"
        @increment-skill="
          incrementSkill('pull', index == 0 ? 1 : 1.5 ** index, 20 * 2 ** index)
        "
        v-for="(skill, index) in pullSkills"
        :key="index"
      ></skill-button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'legs'">
      <skill-button
        category="legs"
        index="0"
        :level="skillClass(skill.difficulty)"
        :name="skill.name"
        :value="index == 0 ? 1 : 1.5 ** index"
        :cost="20 * 2 ** index"
        @increment-skill="
          incrementSkill('legs', index == 0 ? 1 : 1.5 ** index, 20 * 2 ** index)
        "
        v-for="(skill, index) in legsSkills"
        :key="index"
      ></skill-button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'core'">
      <skill-button
        category="core"
        index="0"
        :level="skillClass(skill.difficulty)"
        :name="skill.name"
        :value="index == 0 ? 1 : 1.5 ** index"
        :cost="20 * 2 ** index"
        @increment-skill="
          incrementSkill('core', index == 0 ? 1 : 1.5 ** index, 20 * 2 ** index)
        "
        v-for="(skill, index) in coreSkills"
        :key="index"
      ></skill-button>
    </div>
  </div>
</template>

<script>
import skillButton from "../components/SkillButton.vue";

export default {
  components: {
    skillButton,
  },
  data() {
    return {
      pushSkills: [],
      pullSkills: [],
      legsSkills: [],
      coreSkills: [],
    };
  },
  methods: {
    addSkillPoints(category, points) {
      this.$store.commit("addSkillPoints", {
        category,
        points,
      });
    },
    applyFatigue(category, fatigue) {
      this.$store.commit("applyFatigue", {
        category,
        fatigue,
      });
    },
    incrementSkill(category, points, fatigue) {
      this.addSkillPoints(category, points);
      this.applyFatigue(category, fatigue);
    },
    skillClass(difficulty) {
      switch (difficulty) {
        case "Beginner":
          return "is-success";
        case "Intermediate":
          return "is-info";
        case "Advanced":
          return "is-warning";
        case "Elite":
          return "is-danger";
        default:
          return "";
      }
    },
  },
  mounted() {
    this.pushSkills = this.$store.getters.push;
    this.pullSkills = this.$store.getters.pull;
    this.legsSkills = this.$store.getters.legs;
    this.coreSkills = this.$store.getters.core;
  },
};
</script>
