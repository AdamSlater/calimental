<template>
  <div>
    <p class="mb-2 is-italic has-text-centered">
      Click on a button to perform an exercise.
    </p>
    <div
      class="vertical-button-group"
      v-for="(category, index) in Object.keys(skills)"
      :key="index"
    >
      <div v-if="$route.params.skill == category">
        <skill-button
          :category="category"
          index="0"
          :level="skillClass(skill.difficulty)"
          :name="skill.name"
          :value="calcSkillValue(i)"
          :cost="calcSkillCost(i)"
          @increment-skill="
            incrementSkill(category, calcSkillValue(i), calcSkillCost(i))
          "
          v-for="(skill, i) in skills[category]"
          :key="`skill-${i}`"
          v-show="checkSkillAccess(i, category)"
        ></skill-button>
      </div>
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
      skills: {},
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
  created() {
    this.user = this.$store.getters.user;

    let skills = this.user.skills;
    skills = skills.map((skill) => skill.category);

    skills.forEach((skill) => {
      this.skills[skill] = this.$store.getters[skill];
    });
  },
};
</script>
