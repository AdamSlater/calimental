<template>
  <div>
    <h3 class="title is-5">{{ category | capitalize }}</h3>
    <dl>
      <div>
        <dt>Max Skill</dt>
        <dd>
          <code v-html="skill"></code>
        </dd>
      </div>
      <div>
        <dt>Total Points</dt>
        <dd>
          <code>{{ points | decFmt }}</code>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["category", "skill", "points"],
  filters: {
    capitalize(msg) {
      return msg.charAt(0).toUpperCase() + msg.slice(1);
    },
    decFmt(num) {
      return num.toFixed(2);
    },
  },
};
</script>
