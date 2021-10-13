<template>
  <div class="has-text-centered">
    <button
      class="button is-danger is-outlined"
      @click="reset"
      :disabled="checkFatigue"
    >
      <span class="is-inline-block mr-2">Reset</span>
      <b>&#8635;</b>
    </button>
  </div>
</template>

<script>
export default {
  props: ["user", "skill"],
  computed: {
    checkFatigue() {
      return !(
        this.user[this.skill].fatigue >= this.user[this.skill].maxFatigue
      );
    },
  },
  methods: {
    reset() {
      this.$emit("reset-skill", this.skill);
    },
  },
};
</script>
