<template>
  <div>
    <p class="mb-2 is-italic has-text-centered">
      Click on a button to perform an exercise.
    </p>
    <div class="vertical-button-group" v-if="$route.params.skill == 'push'">
      <skill-button
        category="push"
        index="0"
        :level="skillClass(skill.difficulty)"
        :name="skill.name"
        :value="calcSkillValue(index)"
        :cost="calcSkillCost(index)"
        @increment-skill="
          incrementSkill('push', calcSkillValue(index), calcSkillCost(index))
        "
        v-for="(skill, index) in pushSkills"
        :key="index"
        v-show="checkSkillAccess(index, 'push')"
      ></skill-button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'pull'">
      <skill-button
        category="pull"
        index="0"
        :level="skillClass(skill.difficulty)"
        :name="skill.name"
        :value="calcSkillValue(index)"
        :cost="calcSkillCost(index)"
        @increment-skill="
          incrementSkill('pull', calcSkillValue(index), calcSkillCost(index))
        "
        v-for="(skill, index) in pullSkills"
        :key="index"
        v-show="checkSkillAccess(index, 'pull')"
      ></skill-button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'legs'">
      <skill-button
        category="legs"
        index="0"
        :level="skillClass(skill.difficulty)"
        :name="skill.name"
        :value="calcSkillValue(index)"
        :cost="calcSkillCost(index)"
        @increment-skill="
          incrementSkill('legs', calcSkillValue(index), calcSkillCost(index))
        "
        v-for="(skill, index) in legsSkills"
        :key="index"
        v-show="checkSkillAccess(index, 'legs')"
      ></skill-button>
    </div>
    <div class="vertical-button-group" v-if="$route.params.skill == 'core'">
      <skill-button
        category="core"
        index="0"
        :level="skillClass(skill.difficulty)"
        :name="skill.name"
        :value="calcSkillValue(index)"
        :cost="calcSkillCost(index)"
        @increment-skill="
          incrementSkill('core', calcSkillValue(index), calcSkillCost(index))
        "
        v-for="(skill, index) in coreSkills"
        :key="index"
        v-show="checkSkillAccess(index, 'core')"
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
      user: {},
      pushSkills: [],
      pullSkills: [],
      legsSkills: [],
      coreSkills: [],
    };
  },
  methods: {
    addSkillPoints(category, points, fatigue) {
      this.$store.commit("addSkillPoints", {
        category,
        points,
        fatigue,
      });
    },
    applyFatigue(category, fatigue) {
      this.$store.commit("applyFatigue", {
        category,
        fatigue,
      });
    },
    upgradeFatigue(category, fatigue) {
      this.$store.commit("upgradeFatigue", {
        category,
        fatigue,
      });
    },
    incrementSkill(category, points, fatigue) {
      this.addSkillPoints(category, points, fatigue);
      this.applyFatigue(category, fatigue);

      const skill = this.user.skills.find((s) => s.category == category);

      if (skill.fatigue / skill.maxFatigue > 0.7) {
        const isGoingToUpgrade = Math.round(Math.random() * 10) < 3;
        if (isGoingToUpgrade) {
          this.upgradeFatigue(category, fatigue / 2);
        }
      }
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
    calcSkillCost(index) {
      return 20 * 1.6 ** index;
    },
    calcSkillValue(index) {
      return index == 0 ? 1 : 1.92 ** index;
    },
    checkSkillAccess(index, category) {
      return index == 0
        ? true
        : this.user.skills.find((s) => s.category == category).totalPoints >=
            24 * index;
    },
  },
  mounted() {
    this.user = this.$store.getters.user;
    this.pushSkills = this.$store.getters.push;
    this.pullSkills = this.$store.getters.pull;
    this.legsSkills = this.$store.getters.legs;
    this.coreSkills = this.$store.getters.core;
  },
};
</script>
