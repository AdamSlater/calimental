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
        <skill-details-container :user="user"></skill-details-container>
        <nav-tabs></nav-tabs>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import skillDetailsContainer from "./components/SkillDetailsContainer.vue";
import navTabs from "./components/NavTabs.vue";

export default {
  components: {
    skillDetailsContainer,
    navTabs,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = this.$store.getters.user;
  },
};
</script>

<style lang="scss">
dt {
  display: inline-block;
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
