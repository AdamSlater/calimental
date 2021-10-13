<template>
  <div class="px-5 mb-5">
    <h2 class="title is-4">Stats</h2>
    <div class="columns">
      <div class="column">
        <skill-details
          category="Push"
          skill="push-up"
          :points="user.push.totalPoints"
        ></skill-details>
        <h4 class="title is-6 mt-5 mb-1">Fatigue</h4>
        <progress
          class="progress"
          :class="fatigueClass(user.push.fatigue)"
          :value="user.push.fatigue"
          :max="user.push.maxFatigue"
        >
          90%
        </progress>
        <skill-reset-button
          skill="push"
          @reset-skill="resetSkill"
        ></skill-reset-button>
      </div>
      <div class="column">
        <skill-details
          category="Pull"
          skill="pull-up"
          points="10"
        ></skill-details>
        <h4 class="title is-6 mt-5 mb-1">Fatigue</h4>
        <progress
          class="progress"
          :class="fatigueClass(42)"
          value="42"
          max="100"
        >
          90%
        </progress>
        <skill-reset-button></skill-reset-button>
      </div>
      <div class="column">
        <skill-details
          category="legs"
          skill="squat"
          points="10"
        ></skill-details>
        <h4 class="title is-6 mt-5 mb-1">Fatigue</h4>
        <progress
          class="progress"
          :class="fatigueClass(90)"
          value="90"
          max="100"
        >
          90%
        </progress>
        <skill-reset-button></skill-reset-button>
      </div>
      <div class="column">
        <skill-details
          category="core"
          skill="plank"
          points="10"
        ></skill-details>
        <h4 class="title is-6 mt-5 mb-1">Fatigue</h4>
        <progress
          class="progress"
          :class="fatigueClass(100)"
          value="100"
          max="100"
        >
          90%
        </progress>
        <skill-reset-button></skill-reset-button>
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
    resetSkill(skill) {
      this.user[skill].fatigue = 0;
    },
  },
};
</script>
