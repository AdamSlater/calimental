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
  props: ["skill"],
  computed: {
    checkFatigue() {
      return this.skill.fatigue == 0;
    },
  },
  methods: {
    reset() {
      this.$emit("reset-skill", this.skill);
    },
  },
};
</script>
