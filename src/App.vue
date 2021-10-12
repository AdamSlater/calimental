<template>
  <div id="app" class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 class="title is-1 has-text-centered">
          Welcome to <span>Calimental</span>
        </h1>
        <p class="subtitle is-3 has-text-centered">
          A calisthenics based incremental game
        </p>
        <hr />
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
            </div>
          </div>
        </div>
        <div class="tabs is-centered is-boxed">
          <ul style="border-bottom: 1px solid #dbdbdb">
            <router-link
              to="/skills/push"
              v-slot="{ href, navigate, isActive }"
              custom
            >
              <li :class="[isActive && 'is-active']">
                <a :href="href" @click="navigate">Push</a>
              </li>
            </router-link>
            <router-link
              to="/skills/pull"
              v-slot="{ href, navigate, isActive }"
              custom
            >
              <li :class="[isActive && 'is-active']">
                <a :href="href" @click="navigate">Pull</a>
              </li>
            </router-link>
            <router-link
              to="/skills/legs"
              v-slot="{ href, navigate, isActive }"
              custom
            >
              <li :class="[isActive && 'is-active']">
                <a :href="href" @click="navigate">Legs</a>
              </li>
            </router-link>
            <router-link
              to="/skills/core"
              v-slot="{ href, navigate, isActive }"
              custom
            >
              <li :class="[isActive && 'is-active']">
                <a :href="href" @click="navigate">Core</a>
              </li>
            </router-link>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import skillDetails from "./components/SkillDetails.vue";

export default {
  components: {
    skillDetails,
  },
  data() {
    return {
      push: {
        current: 0,
        capacity: 0,
        skills: [
          {
            difficulty: 0,
            name: "Incline Push Up",
            skillPerClick: 0.5,
            costPerClick: 10,
          },
          {},
        ],
      },
      pull: {},
      core: {},
      legs: {},
      user: {},
    };
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
    incrementSkill(p) {
      this[p.category].current += Number.parseFloat(p.value);
      this[p.category].capacity += Number.parseFloat(p.cost);
    },
  },
  created() {
    this.user = this.$store.getters.user;
  },
};
</script>

<style lang="scss">
dt,
dd {
  display: inline-block;
}

dt {
  font-weight: bolder;
}

dt::after {
  content: ": ";
}

dd::after {
  content: "";
  display: block;
}

dd code {
  margin-left: 0.5rem;
}

.vertical-button-group button {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
