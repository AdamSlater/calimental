<template>
  <div class="has-text-centered">
    <button class="button is-danger is-outlined" @click="reset">
      <span class="is-inline-block mr-2">Reset</span>
      <b>&#8635;</b>
    </button>
  </div>
</template>

<script>
export default {
  props: ["skill"],
  methods: {
    reset() {
      this.$emit("reset-skill", this.skill);
    },
  },
};
</script>
