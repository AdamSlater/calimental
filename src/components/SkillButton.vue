<template>
  <button class="button is-rounded" :class="level" @click="incrementSkill">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: ["name", "level"],
  methods: {
    incrementSkill() {
      let payload = {
        category: this.category,
        index: this.index,
        value: this.value,
        cost: this.cost,
      };
      this.$emit("increment-skill", payload);
    },
  },
};
</script>
